import { projects, skills } from "./data.js"



const listOfProjects = document.getElementById('projectlist')
const skillList = document.getElementById('skills')
const mobileMenu = document.getElementById('headerMenu')
const desktopMenu = document.getElementById('header-desktop-menu')
const topbtn = document.getElementById('topbtn')
const contactBtn = document.getElementById('contact-button')
const goBack = document.getElementById('goBack')

window.onload = ("load",init)


window.addEventListener('resize',checkScreenSize)
if(goBack){
    goBack.addEventListener('click', goToSite)
}

function goToSite(){
    return window.location = "http://127.0.0.1:5500/index.html";
}

const menuList = document.querySelectorAll(".menu-object")
menuList.forEach(element => element.addEventListener('click', (e)=> {
        scrollToSection(e.target.value)
    }))

export function getRandomNumber(){
    return Math.floor(Math.random() * 100)
}

topbtn.addEventListener('click',()=>{scrollToSection(3)})
contactBtn.addEventListener('click',()=>{scrollToSection(4)})

function scrollToSection(id){
    if(id === 1){
        document.getElementById(id).scrollIntoView( { top:-80, behavior: "smooth"});
        return
    }
    document.getElementById(id).scrollIntoView( { behavior: "smooth", offset:{top:100}});
}


function init(){
    checkScreenSize()
    createProjectElement()
    createItemElement(skills)
}

function checkScreenSize(){
    let browserWidth = innerWidth;
    let screenWidth = innerWidth;
    if(browserWidth <= 1080 || screenWidth <= 1080){
        mobileMenu.style.display = "flex"
        desktopMenu.style.display="none"
    }
    if(browserWidth >= 1080 || screenWidth >= 1080){
        mobileMenu.style.display = "none"
        desktopMenu.style.display="flex"
        }
}

function createItemElement(list){
    list.map(item =>{
            const li = createNewElement('li','',skillList)
            li.innerText = item
        }) 
}

function createProjectElement(){
    projects.map(project =>{
        const li = createNewElement('li','',listOfProjects)
        const divImage = createNewElement('div','project_inner-image',li)
        const image = createNewElement('img','project_image',divImage)
        image.src= project.image
        image.alt = project.alt
        const divContent = createNewElement('div',"project_inner-card",li)
        const divText = createNewElement('div','',divContent)
        const label = createNewElement('label','',divText)
        label.innerText = project.title
        const p = createNewElement('p','',divText)
        p.innerText = project.text
        const link = createNewElement('a','a-link',divContent)
        link.target = "blank"
        link.href = project.link
        link.innerText = "Go to project"
    
    });
}

function createNewElement(element,classObj,parent){
    element = document.createElement(element)
    element.className = classObj
    parent.append(element)
    return element
}