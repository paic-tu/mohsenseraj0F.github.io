// clearing the console (just a CodePen thing)

console.clear();

// there are 3 parts to this
//
// Scene:           Setups and manages threejs rendering
// loadModel:       Loads the 3d obj file
// setupAnimation:  Creates all the GSAP 
//                  animtions and scroll triggers 
//
// first we call loadModel, once complete we call
// setupAnimation which creates a new Scene

class Scene
{
	constructor(model)
	{
		this.views = [
			{ bottom: 0, height: 1 },
			{ bottom: 0, height: 0 }
		];
		
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});
		
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.shadowMap.enabled = true;
