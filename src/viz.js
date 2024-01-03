import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import cfg from "./config.js"
import colors from "./colormaps.js"

const L = param.L;
const X = d3.scaleLinear().domain([-L,L]);
const Y = d3.scaleLinear().domain([-L,L]);


const paint = colors[cfg.simulation.colormap];

const initialize = (display,config) => {

	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
	
	display.selectAll("#origin").remove();
	origin = display.append("g").attr("id","origin")
	
	origin.selectAll("#agent").data(agents).enter().append("circle")
	.attr("id","agent")
	.attr("r",param.agentsize)
	.attr("cx",d=>X(d.x))
	.attr("cy",d=>Y(d.y))
	.style("fill",d => {
		let x = d.theta % (2*Math.PI)
		if (x<0) x+= 2*Math.PI
		return paint( x/(2*Math.PI))
	})
	
};

const go = (display,config) => {
	
	
	display.select("#origin").selectAll("#agent")
		.attr("cx",d=>X(d.x))
		.attr("cy",d=>Y(d.y))
		.style("fill",d => {
			let x = d.theta % (2*Math.PI)
			if (x<0) x+= 2*Math.PI
			return paint( x/(2*Math.PI))
		})

}

const update = go;


export {initialize,go,update}
