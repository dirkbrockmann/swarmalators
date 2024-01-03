import param from "./parameters.js"
import {each,range,map,mean,meanBy,maxBy,minBy} from "lodash-es"
import {dist} from "./utils"
import {randomNormal} from "d3"

const L = param.L;
const dt = param.dt;
const rd = randomNormal(0,1);
const ddt = Math.sqrt(dt);

var agents = [];

const initialize = () => {
	
	

	// set/reset timer
	param.timer={}; param.tick=0;

	agents = range(param.N).map(i => {
		let theta = 2*Math.PI*Math.random();
		  return {
		    index: i,
			x: 2*param.L*(Math.random()-0.5),
			y: 2*param.L*(Math.random()-0.5),  
			vx : Math.cos(theta),
			vy : Math.sin(theta),  
			dx : 0,
			dy : 0,
			omega:param.omega,
			domega:rd(),
			theta: Math.random()*2*Math.PI,
			dtheta : 0  
		  };
	});
	
	const mvx = meanBy(agents,d=>d.vx)
	const mvy = meanBy(agents,d=>d.vy)

	each(agents,d=>{ d.vx-=mvx; d.vy-=mvy;})
	
	
	
};

const go  = () => {
	
	param.tick++;
	
	const phasemod = param.freeze_phase.widget.value() ? 0 : 1;
	const varomega = param.frequency_variation.widget.value();
	const J = param.like_attracts_like_strength.widget.value();
	const K = param.synchronization_strength.widget.value();
	const sigma = param.wiggle.widget.value();
	
	each(agents,n=>{
		n.dtheta = n.omega*phasemod+varomega*n.domega;
		each(agents,m=>{
			if (n.index!=m.index){
			let d = dist(n,m);
			let kernel = (1+J*Math.cos(m.theta-n.theta)/d - 1.0/(d*d))/param.N;
			n.dx += (m.x-n.x)*kernel;
			n.dy += (m.y-n.y)*kernel;
			n.dtheta += K/param.N*Math.sin(m.theta-n.theta)/d;
		}
		})
		n.dx*=param.dt;
		n.dy*=param.dt;
		n.dtheta*=param.dt;
	})
	
	
	each(agents,n=>{
		n.x+=n.dx+ddt*sigma*(Math.random()-0.5);
		n.y+=n.dy+ddt*sigma*(Math.random()-0.5);
		n.theta+=n.dtheta;
	})
	
}

const update = () => {
	
	each(agents,n=>{
		n.theta+=0.25*Math.PI*2*(Math.random()-0.5) % (2*Math.PI)
		let w = 2*Math.PI*Math.random()
		n.x+=0.01*Math.cos(w);
		n.y+=0.01*Math.sin(w);
	})

}


export {agents,initialize,go,update}
