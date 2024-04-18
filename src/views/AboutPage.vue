<template>
  <section class="about section" id="about">
    <div class="container flex-container">
      <h1  class="section-title">About Me</h1>
      <div class="content flex-center">
        <div class="about-img">
          <img src="tasarimmmmm.png" alt="">
        </div>
        <div class="about-info">
          <div class="description">
            <h3 data-aos="fade-left">I'am Emine</h3>
            <h4 data-aos="fade-left">Front-End Developer</h4>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem possimus repellendus dicta omnis minima cumque quos saepe voluptate alias, velit quasi, cum modi voluptatum magni nulla perspiciatis culpa laudantium!</p>
          </div>
          <a class=" btn animate__animated  animate__wobble" href="" > Download CV <i class="fas fa-download"></i> </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
 
}
</script>

<style scoped>
.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.section{
  position: relative;
  width: 90%;
 margin: 0 auto;
 /* background: #262626; */
 background: #18181B;
}
.section-title{
  font-size: 4.5em;
 margin: 6rem;
  
}
.container{
  position: relative;
  flex-direction: column;
}
.about .container .content{
column-gap: 40px;
width: 100%;
}
.about-img{
  position: relative;
}
.about-img img{
  max-width: 90%;
  min-width: 400px;
  border-radius: 10px;
}
.about-info .description{ 
  max-width: 600px;

}
.about-info .description h3{
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: unset;

}
.about-info .description h4 {
  color: white ;
}
.about-info .description{
  color: white;
  font-size: 1em;
  margin-bottom: 15px;
  padding-bottom: 25px;
  border-bottom: 0.5px solid #facc15;
  background-image: linear-gradient(to right, #facc15, #db2777) !important;
    -webkit-background-clip: text !important;
    color: transparent !important;
}
.btn{
  background: #facc15;
  font-weight: 500;
    display: inline-block;
    margin-top: 25px;
    padding: 14px 30px;
    letter-spacing: 1px;
    border-radius: 10px;
}
</style>