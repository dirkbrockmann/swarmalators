import param from "./parameters.js"

const presets =  {
	"Rainbow Ring":{J:0.5,K:0,noise:0,varomega:0,adv:false},
	"Dancing Circus":{J:0.93,K:-0.88,noise:0,varomega:0,adv:false},
	"Uniform Blob":{J:0.1,K:1,noise:0,varomega:0,adv:false},
	"Solar Convection":{J:0.1,K:1,noise:0,varomega:0.8,adv:true},
	"Makes Me Dizzy":{J:1.0,K:.51,noise:0,varomega:0.4439,adv:true},
	"Fractions":{J:1.0,K:-0.12,noise:0,varomega:0,adv:false}
}

export default (controls) => {
		const v = param.presets.widget.value();
		const ch = param.presets.choices;
		const parset = presets[ch[v]];
		param.synchronization_strength.widget.reset(controls,parset["K"])
		param.like_attracts_like_strength.widget.reset(controls,parset["J"])
		param.wiggle.widget.reset(controls,parset["noise"])
		param.frequency_variation.widget.reset(controls,parset["varomega"])	
		
}
