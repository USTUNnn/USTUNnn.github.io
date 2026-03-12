/* SMOOTH SCROLL */

const lenis = new Lenis()

function raf(time) {

lenis.raf(time)

requestAnimationFrame(raf)

}

requestAnimationFrame(raf)



/* GSAP ANIMATIONS */

gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray(".section").forEach(section => {

gsap.from(section,{

opacity:0,
y:120,
duration:1.5,

scrollTrigger:{

trigger:section,
start:"top 80%",

}

})

})



/* THREE.JS BACKGROUND */

const canvas = document.getElementById("bg")

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

const renderer = new THREE.WebGLRenderer({canvas,alpha:true})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z = 5



const geometry = new THREE.IcosahedronGeometry(1,1)

const material = new THREE.MeshBasicMaterial({

color:0xffffff,
wireframe:true

})

const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)



function animate(){

requestAnimationFrame(animate)

mesh.rotation.x += 0.002

mesh.rotation.y += 0.003

renderer.render(scene,camera)

}

animate()



window.addEventListener("resize",()=>{

renderer.setSize(window.innerWidth,window.innerHeight)

camera.aspect = window.innerWidth/window.innerHeight

camera.updateProjectionMatrix()

})