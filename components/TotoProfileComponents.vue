<template>
  <div class="container font-apFont"  >
    <div class="card rounded-xl p-10 hoverAnimation">
      <figure><img :src="switchProfile" class="w-72 rounded-xl " alt="AP Profile" @mouseover="showName" @mouseleave="hideName"/></figure>
      <div class="card-body">
        <div class="card-tile">
          <h1 class="text-2xl font-bold">
            {{ customGreet }}
          </h1>
        </div>
        <p>
          {{ positionShow }}
        </p>
        <p v-if="showLogo"></p>
        <div  v-if="!showLogo"  class="overflow-y-scroll scrollbar-hide h-24">
          <div v-for="data in skills">
            <p class="font-bold">{{ data.name }}</p>
            <div v-for="sk in data.skill">
              <p>- {{ sk.name }}</p>
            </div>
            <p>*****************</p>
          </div>
        </div>
        <div class="justify-end">
          <img src="../assets/svg/logo.svg" alt="arsanandha" v-if="showLogo"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import totoMain from 'assets/jpg/toto-main.png';
import totoAlternative from 'assets/jpg/toto-alternative.jpg';
export default {
  name: "TotoProfileComponents",
  data() {
    return {
      text: "as soon as possible.",
      customGreet: "",
      showLogo: true,
      switchProfile: new URL(totoMain, import.meta.url).href,
      positionShow: "",
      skills: []
    }
  },
  methods: {
    showName: function() {
      setTimeout(() => {
        this.customGreet = "Asanan Aphisitworachorch";
        this.showLogo = false;
        this.switchProfile = new URL(totoAlternative, import.meta.url).href;
        this.positionShow = "Backend Developer"
        this.skills = [{
          alias: "programming_language",
          name: "Programming Language",
          skill: [{
            alias:"js",
            name:"JavaScript"
          },{
            alias:"ts",
            name:"TypeScript"
          },{
            alias:"golang",
            name:"Golang"
          },{
            alias:"csharp",
            name:"C#"
          },{
            alias:"java",
            name:"Java"
          },{
            alias:"php",
            name:"PHP"
          },{
            alias:"arduinocpp",
            name:"Arduino C++"
          }]
        },{
          alias:"os",
          name:"Operating Systems",
          skill: [{
            alias:"win",
            name:"Windows (Server)"
          },{
            alias:"linux",
            name:"Linux Distros (Ubuntu / Fedora / RHEL)"
          },{
            alias:"macos",
            name:"macOS"
          }]
        },{
          alias:"programminglang_frameworks",
          name:"Programming Language Framework",
          skill: [{
            alias:"nestjs",
            name:"NestJS"
          },{
            alias:"express",
            name:"Express"
          },{
            alias:"laravel",
            name:"Laravel"
          },{
            alias:"gin",
            name:"Gin"
          },{
            alias:"django",
            name:"Django"
          },{
            alias:"flask",
            name:"Flask"
          },{
            alias:"fastapi",
            name:"FastAPI"
          },{
            alias:"aspnet",
            name:"ASP.net (MVC/Core)"
          },{
            alias:"nuxtjs",
            name:"Nuxt (Vue)"
          }]
        },{
          alias:"databases",
          name:"Databases",
          skill: [{
            alias:"postgresql",
            name:"PostgreSQL"
          },{
            alias:"supabase",
            name:"Supabase"
          },{
            alias:"mysql",
            name:"MySQL"
          },{
            alias:"mariadb",
            name:"MariaDB"
          },{
            alias:"mssql",
            name:"Microsoft SQL Server"
          },{
            alias:"redis",
            name:"Redis"
          }]
        },{
          alias:"datascience_skills",
          name:"Data Science Skills",
          skill: [{
            alias:"tableau",
            name:"Tableau"
          },{
            alias:"excel",
            name:"Microsoft Excel"
          },{
            alias:"csv",
            name:"Comma Separated Value File"
          },{
            alias:"webscraping",
            name:"Web Scraping with Data Manipulation"
          }]
        },{
          alias:"artificial_intelligence",
          name:"Artificial Intelligence Skills",
          skill: [{
            alias:"nlp",
            name:"Foundation of Natural Language Processing"
          },{
            alias:"chatbot",
            name:"Foundation of Chatbot"
          }]
        },{
          alias:"testing_and_document_frameworks",
          name:"Testing & Documentation Frameworks",
          skill: [{
            alias:"postman",
            name:"Postman"
          },{
            alias:"insomnia",
            name:"Kong Insomnia"
          },{
            alias:"K8",
            name:"k8"
          },{
            alias:"selenium",
            name:"Selenium"
          }]
        },{
          alias:"development_tools",
          name:"Development Tools",
          skill: [{
            alias:"prometheus",
            name:"Prometheus"
          },{
            alias:"grafana",
            name:"Grafana"
          },{
            alias:"otel",
            name:"Foundation of OpenTelemetry"
          },{
            alias:"elk",
            name:"Foundation of ELK Stack"
          },{
            alias:"imgproxy",
            name:"ImgProxy"
          },{
            alias:"docker",
            name:"Docker"
          },{
            alias:"k8s",
            name:"Little of K8s"
          },{
            alias:"datadog",
            name:"Little of Datadog"
          }]
        },{
          alias:"ops_skills",
          name:"DevOps Skills",
          skill: [{
            alias:"aws",
            name:"AWS S3 / Lambda"
          },{
            alias:"digitalocean",
            name:"DigitalOcean Instance / Functions / Spaces / Database"
          },{
            alias:"azure",
            name:"Azure Blob Storage / SQL Server"
          },{
            alias:"cf",
            name:"Cloudflare"
          },{
            alias:"cicd",
            name:"CI/CD Pipeline (GitLab) / Auto-deploy"
          }]
        },{
          alias:"extraordinary_skills",
          name:"Extraordinary Skills",
          skill: [{
            alias:"training",
            name:"Training Skills (Technology Stack Training / Programming Language Training / Knowledge Sharing)"
          },{
            alias:"data_governance",
            name:"Data Governance"
          },{
            alias:"iot",
            name:"IoT (API Usage / Plan)"
          },{
            alias:"it_support",
            name:"IT Support / Helpdesk Skill (Crash Diagnostic / Error Diagnostic)"
          },{
            alias:"graphics_design",
            name:"Graphic Design (Adobe Illustrator / Affinity Designer)"
          },{
            alias:"coffee_skills",
            name:"Coffee Brewing Skills (Espresso / Pour-over)"
          },{
            alias:"tech_stack_pioneer",
            name:"Tech-stack Pioneer"
          }]
        }]
      }, 300)

    },
    hideName: function() {
      this.customGreet = "";
      this.positionShow = "";
      this.showLogo = true;
      this.switchProfile = new URL(totoMain, import.meta.url).href;
      this.skills = [];
    }
  }
}
</script>

<style scoped>
.hoverAnimation {
  @apply transition ease-in-out delay-75 duration-300 hover:grayscale
}
</style>