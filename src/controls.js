import * as widgets from "d3-widgets"
import {range,map,toPairs,take,takeRight,concat,each} from "lodash-es"
import cfg from "./config.js"
import parameters from "./parameters.js"
import preset_parameters from "./presets.js"
import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices} from "./utils.js"

const all_variables = get_variables(parameters);
const booleans = get_booleans(parameters);
const choices = get_choices(parameters);

add_id_label(all_variables)
add_id_label(booleans)
add_id_label(choices)

const all_va = toArray(all_variables);
const va = take(all_va,2)
const adv_va = takeRight(all_va,2)
const bo = toArray(booleans);
const ch = toArray(choices);

const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
					.girth(cfg.widgets.slider_girth)
					.knob(cfg.widgets.slider_knob)
		);



const adv_sliders = map(adv_va,
	v => widgets.slider()
			.id(v.id)
			.label(v.label)
			.range(v.range)
			.value(v.default)
			.size(cfg.widgets.adv_slider_size)
	);

		
const toggles = map(bo, 
		v => widgets.toggle()
					.id(v.id)
					.label(v.label)
					.value(v.default)					
		);
		
toggles[1].label(cfg.widgets.adv_label)

const radios = map(ch, 
		v => widgets.radio()
					.choices(v.choices)
					.id(v.id)
					.value(v.default)
					.orientation(cfg.widgets.radio_orientation)
					.labelposition(cfg.widgets.radio_label_position)
		);

		
add_widget(bo,toggles);
add_widget(va,sliders);
add_widget(adv_va,adv_sliders);
add_widget(ch,radios);


const go = widgets.button().actions(["play","pause"])
const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])
const perturb = widgets.button().actions(["push"])
const reset_sync = widgets.button().actions(["rewind"])
const reset_like = widgets.button().actions(["rewind"])

		
const buttons = [go,setup,reset,perturb,reset_sync,reset_like];


export default (controls,grid)=>{

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
			.map(x=>(cfg.widgets.slider_anchor.y+cfg.widgets.slider_gap*x)));
	
	const adv_sl_pos=grid.position(cfg.widgets.adv_slider_anchor.x,range(adv_sliders.length)
			.map(x=>(cfg.widgets.adv_slider_anchor.y+cfg.widgets.adv_slider_gap*x)));
	
	const tg_pos=grid.position(range(toggles.length)
			.map(x=>(cfg.widgets.toggle_anchor.x+cfg.widgets.toggle_gap*x)),cfg.widgets.toggle_anchor.y);
	
	const ra_pos=grid.position(cfg.widgets.radio_anchor.x,cfg.widgets.radio_anchor.y);		
	
	sliders.forEach((sl,i) => sl.position(sl_pos[i]));
	adv_sliders.forEach((sl,i) => sl.position(adv_sl_pos[i]));
	
	toggles.forEach((tg,i) => tg.position(tg_pos[i]).labelposition(cfg.widgets.toggle_label_pos));


	radios[0].position(ra_pos)
		.size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape)
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y))
		.size(cfg.widgets.button_size);
	
	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y))
		.size(cfg.widgets.button_size);
	
	perturb.position(grid.position(cfg.widgets.perturbbutton_anchor.x,cfg.widgets.perturbbutton_anchor.y))
		.size(cfg.widgets.button_size)
		.label(cfg.widgets.perturbbutton_label)
		.labelposition(cfg.widgets.perturbbutton_labelposition);
		
	reset_sync.position(grid.position(cfg.widgets.syncbutton_anchor.x,cfg.widgets.syncbutton_anchor.y))
		.size(cfg.widgets.syncbutton_size);
	
	reset_like.position(grid.position(cfg.widgets.likebutton_anchor.x,cfg.widgets.likebutton_anchor.y))
		.size(cfg.widgets.likebutton_size);
	

	controls.selectAll(null).data(concat(sliders,adv_sliders)).enter().append(widgets.widget);
	controls.selectAll(null).data(toggles).enter().append(widgets.widget);
	controls.selectAll(null).data(buttons).enter().append(widgets.widget);
	controls.selectAll(null).data(radios).enter().append(widgets.widget)
	
	each(adv_sliders,s=>{
		controls.select("#slider_"+s.id())
			.style("opacity",parameters.advanced_settings.widget.value()?1:0)
			
			controls.select("#slider_"+s.id()).selectAll("*")
				.style("pointer-events",parameters.advanced_settings.widget.value()?null:"none")
	})
	
	const slider_zero_pos=grid.position(5.5,[6,4.5])

	controls.selectAll(null).data([0,1]).enter().append("circle")
		.attr("r",3)
		.attr("cx",d=>slider_zero_pos[d].x)
		.attr("cy",d=>slider_zero_pos[d].y)
	
	preset_parameters(controls)
	
	
}

// here are all the exported objects, all the parameters, their associated widgets and the action buttons

export {sliders,adv_sliders,toggles,radios,go,setup,reset,perturb,all_variables,booleans,choices,reset_sync,reset_like}


