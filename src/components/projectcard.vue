<template>
    <div class="projectcard">
        <h4> {{title}}</h4>
        <div class="container-projectcard">
            <img src="../assets/github.jpg" alt="Avatar" class="image-projectcard">
            <div class="overlay-projectcard">
                <div class="info-projectcard">{{description}}</div>
            </div>
        </div>
        <div class="tags-projectcard">
            <ul>
                <li>{{tags1}}</li>
                <li>javascript</li>
                <li>css</li>
                <li>html</li>
                <li>{{tags2}}</li>
            </ul>
        </div>
        <div class="linkscard">
            <a :href="link_github">
                <fa :icon="['fab','github']" />Code
            </a>
            <a :href="link_web">
                <fa :icon="['fa','arrow-up-right-from-square']" />Website
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ProjectCard',
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            link_github: {
                type: String,
                required: true
            },
            link_web: {
                type: String,
                required: true
            }
            ,
            tags1: {
                type: String,
                required: true
            },
            tags2: {
                type: String,
                required: true
            }
            ,
        },
        data() {
            return {
                isHovering: false
            }
        }
    }
</script>
<style>




.projectcard h4{
   color:#f3ca20;
    font-family:'Source Code Pro',monospace;
}





.tags-projectcard{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width:300px;
    height:60px;
    background: black;
}
.tags-projectcard ul{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    list-style: none;

}
.tags-projectcard ul li{
    text-decoration: none;
    padding:3px;
    margin:3px;
    border-radius:5px;
    background:#f3ca20;
    color:black;
    font-size:0.8rem;
    font-family: 'Source Code Pro', monospace;
}




.projectcard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 400px;
    background-color: #000000;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}
.container-projectcard {
    position: relative;
    width: 300px;
    height:300px;
}

.image-projectcard {
    display: block;
    width: 100%;
    height: auto;
}

.overlay-projectcard {
    position: absolute;
    bottom: 0;
    left: 100%;
    right: 0;
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    width: 0;
    height: 100%;
    color:#f3ca20;
    transition: .5s ease;
}

.container-projectcard:hover .overlay-projectcard {
    width: 100%;
    left: 0;
}

.info-projectcard {
    color: #f3ca20;
    font-size: 20px;
    position: absolute;
    font-family:'Source Code Pro',monospace;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display:flex;
    width: 280px;
    height: 100%;
    justify-content: center;
    text-align:center;
    align-items:center;
    padding:4px;

}
.linkscard{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 300px;
    height: 40px;
    font-size:1.2rem;
    background-color: #000000;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

}
.linkscard svg{
    color:#f3ca20;
    border-radius: 50%;
    background-color: transparent;
    margin-right:5px;
}


.linkscard a{
    text-decoration: none;
    color:#f3ca20;
    font-family:"Source Code Pro",monospace;
    padding:3px;
    border-radius:5px;
}
.linkscard a:hover {
    box-shadow: 0px 0px 10px 5px #f3ca20;
}
</style>