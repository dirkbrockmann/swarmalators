// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		dt:0.1,
		N:500,
		agentsize: 5.0,
		L:1.3,
		omega:1.0,		 	
		
		synchronization_strength: {
			range:[-1,1],
			default:0.51
		},
		like_attracts_like_strength: {
			range:[-1,1],
			default:1
		},
		wiggle:{
			range : [0,0.05],
			default : 0
		},
		frequency_variation:{
			range : [0,1],
			default : 0.4439
		},
		presets : {
			choices:[
				"Makes Me Dizzy",
				"Fractions",
				"Rainbow Ring",
				"Dancing Circus",
				"Uniform Blob",
				"Solar Convection",				
			],
		default:0
		},
		freeze_phase: {
			default: false
		},
		advanced_settings: {
			default: false
		}

}

