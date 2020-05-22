<template>
    <div>
        <a class="icon-btn floating-icon bottom-right">
            <i class="material-icons  " v-on:click="editTask()">edit</i>
            <small>Create Task</small>
        </a>
        <div  class="fill">
            <div id="svgConainer">
            </div>
        </div>
        <EditTaskModal v-if="isEditModalOpen" @ok="editTaskOk" @cancel="editTaskCancel" 
            :data="taskToEdit"
            :refTasks="tasks" >
        </EditTaskModal>
    </div>  
</template>

<script>
import EditTaskModal from "../components/EditTaskModal"
import * as d3  from "d3";
import _ from "lodash";
import { mapGetters } from "vuex";
const margin={left:100, right:20, top:50, bottom: 20};

export default {
    name: "Plan",
    components: {
        EditTaskModal
    },
    data:()=>{
      return {
          title : "Plan view",
          svg : null,
          isEditModalOpen: false,
          taskToEdit: null,
      }
    },
    computed:{
        ...mapGetters(["tasks"])
    },
    created(){
        this.svg = null;
        console.log(this.projectDetails);
    },
    mounted(){
        //append svg
        this.svg = d3.select("#svgConainer").append("svg")
                    .attr("class", "chart");
        
        this.drawChart()
    },
    methods:{
        editTask(t){
            this.isEditModalOpen = true
            this.taskToEdit = _.cloneDeep(t)
        },
        editTaskOk(){
            this.isEditModalOpen = false
            this.taskToEdit = null
            this.drawChart()
        },
        editTaskCancel(){
            this.isEditModalOpen = false
            this.taskToEdit = null
        },
        drawChart(){
            let t = null
            try{
                t = this.buildDepChain(this.tasks);
            } catch(e){
                console.error(e)
            }
            
            this.drawGantt(t);
        },
        buildDepChain(issues){
            var chainedTasks = [];
            //find tasks with no dep
            let noDepTasks = _.filter(issues, (i)=>{
                return i.dependencies == null || i.dependencies == "" || (Array.isArray(i.dependencies) && i.dependencies.length == 0);
            })
            _.each(noDepTasks, (t)=>{
                t.start = 0;
                t.end = +t.size;
            })

            _.each(issues,(t)=>{
                this.updateBounds(t, issues);
            })
            chainedTasks = issues.sort(function(a, b){return a.start - b.start});
            return chainedTasks;
        },
        updateBounds(t, issues) {
            //find the dependent tasks on t and update bounds of each recursively
            issues.forEach((i)=>{
                if(i.id == t.id){
                    //skip
                } else if(i.dependencies == null || 
                    i.dependencies == "" || 
                    (Array.isArray(i.dependencies) && i.dependencies.length == 0)){
                    //skip
                } else if (i.dependencies == t.id || _.find(i.dependencies, {'id': t.id})){
                    //if already set by some other dependent then modify to higher value
                    if(i.start == null || i.start < t.end){
                        i.start = (t.end || 1 ) + 1;
                    } 
                    i.end = i.start + (+(i.size || 1)) - 1;
                    this.updateBounds(i, issues);
                }

                //call 
                
            })
        },
        drawGantt(data){
            let svgWidth =  +this.svg.style('width').slice(0,-2);
            let svgHeight = +this.svg.style('height').slice(0,-2);
            let innerWidth = svgWidth - (margin.left + margin.right);
            let innerHeight = svgHeight - (margin.top + margin.bottom);

            //valueAccesser
            const xValue = d => +d.size;
            const yValue = d => d.name ;
            let lastTask =_.maxBy(data, (d) =>{ return d.end; });
            let lastTaskEnd = lastTask ? lastTask.end +1 : 1
            const xScale = d3.scaleLinear()
                  .domain([0, lastTaskEnd])
                  .range([0, innerWidth])
            
            const xAxis = d3.axisTop(xScale);
            xAxis.ticks(lastTaskEnd)
                .tickSize(-innerHeight)
            
            
            

            const yScale = d3.scaleBand()
                  .domain(data.map(yValue))
                  .range([0, innerHeight])
                  .padding(0.1)

            const yAxis = d3.axisLeft(yScale)
            
            this.svg.selectAll('*').remove();
            let g = this.svg.append('g')
                  .attr('transform', `translate(${margin.left}, ${margin.top})`)
            
            g.append('g').call(yAxis);
            g.append('g').call(xAxis);
            
            let rectEnter = g.selectAll('rect').data(data)
                .enter()
                .append('rect')
                    .attr('padding', 1)
                    .attr('class', 'rect')
                    .attr('y', d => yScale(yValue(d)))
                    .attr('x', d => xScale(d.start))
                    .attr('width', d=> xScale(xValue(d)))
                    .attr('height', yScale.bandwidth())
                    .on('dblclick', (d) =>{
                        console.log(d)
                        this.editTask(d)
                    })
                    
            rectEnter.append('text')
                  .text(d=>d.name)
                  .attr('class', 'text-on-bar')

            g.selectAll('rect')
                    .exit()
                    .remove()
            
        }
    }
}
</script>

<style>
    .fill{
        height: 100%;
        /* width: 99%; */
        overflow: hidden;
        text-align: center;
    }

    /* SVG start */
    .chart{
        width:85%;
        height:75vh;
        
    }

    .text-on-bar{
        color: blueviolet;
        font-size: 1.4em;
        text-anchor: start;
    }

    .rect{
        rx:5;
    }
    .tick line{
        stroke: lightgrey;
        stroke-opacity: 1;
        shape-rendering: crispEdges;
    }
    /* SVG end */

</style>