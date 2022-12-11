<template>
  <div class="container font-apFont"  >
    <div class="flex flex-col md:flex-row m-3">
      <div class="p-2">
        <div class="avatar">
          <div class="w-96 rounded-b-xl rounded-t-xl">
            <img :src="switchProfile"  alt="Profile"/>
          </div>
        </div>
        <img src="../assets/svg/logo.svg" alt="arsanandha" class="p-3 pt-9 invisible md:visible"/>
      </div>
      <div class="p-2 text-left">
        <h1 class="text-5xl pl-3 pb-3 pt-2 pr-6 text-bold"><b>
          About Me
        </b></h1>
        <p class="pl-3">Scroll for more information.</p>
        <div class="overflow-y-scroll scrollbar-hide h-80 w-76 pl-3 pt-2">
          <div class="w-76 rounded bg-emerald-900 mb-3" v-for="info in skills">
            <div class="p-3">
              <h1 class="text-xl font-bold ml-2">{{ info.name }}</h1>
              <h3 class="ml-2">Total {{ info.skill.length }} Skills</h3>
              <div class="badge rounded ml-2 p-2 bg-emerald-700 hover:bg-emerald-500 hover:font-bold break-words" v-for="more in info.skill">{{ more.name }}</div>
            </div>
          </div>
        </div>
        <div class="pl-3 pt-5 pb-5">
          <nuxt-link to="/" class="btn btn-info font-bold rounded">Back</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import totoMain from 'assets/jpg/toto-main.png';
import totoAlternative from 'assets/jpg/toto-alternative.jpg';
export default {
  name: "TotoAboutComponents",
  data() {
    return {
      text: "as soon as possible.",
      customGreet: "",
      showLogo: true,
      switchProfile: new URL(totoAlternative, import.meta.url).href,
      positionShow: "",
      skills: []
    }
  },
  methods: {
    showName: function() {
      setTimeout(() => {
        this.customGreet = "Asanan Aphisitworachorch";
        this.showLogo = false;
        this.switchProfile = new URL(totoMain, import.meta.url).href;
        this.positionShow = "Backend Developer"
        this.skills = [{
          alias: "programming_language",
          name: "Programming Language",
          skill: [{
            alias:"js",
            name:"JavaScript",
            details: ""
          },{
            alias:"ts",
            name:"TypeScript",
            details: ""
          },{
            alias:"golang",
            name:"Golang",
            details: ""
          },{
            alias:"csharp",
            name:"C#",
            details: ""
          },{
            alias:"java",
            name:"Java",
            details: ""
          },{
            alias:"php",
            name:"PHP",
            details: ""
          },{
            alias:"arduinocpp",
            name:"Arduino C++",
            details: ""
          }]
        },{
          alias:"os",
          name:"Operating Systems",
          skill: [{
            alias:"win",
            name:"Windows (Server)",
            details: ""
          },{
            alias:"linux",
            name:"Linux Distros (Ubuntu / Fedora / RHEL)",
            details: ""
          },{
            alias:"macos",
            name:"macOS",
            details: ""
          }]
        },{
          alias:"programminglang_frameworks",
          name:"Programming Frameworks",
          skill: [{
            alias:"nestjs",
            name:"NestJS",
            details: ""
          },{
            alias:"express",
            name:"Express",
            details: ""
          },{
            alias:"laravel",
            name:"Laravel",
            details: ""
          },{
            alias:"gin",
            name:"Gin",
            details: ""
          },{
            alias:"django",
            name:"Django",
            details: ""
          },{
            alias:"flask",
            name:"Flask",
            details: ""
          },{
            alias:"fastapi",
            name:"FastAPI",
            details: ""
          },{
            alias:"aspnet",
            name:"ASP.net (MVC/Core)",
            details: ""
          },{
            alias:"nuxtjs",
            name:"Nuxt (Vue)",
            details: ""
          }]
        },{
          alias:"databases",
          name:"Databases",
          skill: [{
            alias:"postgresql",
            name:"PostgreSQL",
            details: ""
          },{
            alias:"supabase",
            name:"Supabase",
            details: ""
          },{
            alias:"mysql",
            name:"MySQL",
            details: ""
          },{
            alias:"mariadb",
            name:"MariaDB",
            details: ""
          },{
            alias:"mssql",
            name:"Microsoft SQL Server",
            details: ""
          },{
            alias:"redis",
            name:"Redis",
            details: ""
          }]
        },{
          alias:"datascience_skills",
          name:"Data Science",
          skill: [{
            alias:"tableau",
            name:"Tableau",
            details: ""
          },{
            alias:"excel",
            name:"Microsoft Excel",
            details: ""
          },{
            alias:"csv",
            name:"Comma Separated Value File",
            details: ""
          },{
            alias:"webscraping",
            name:"Web Scraping with Data Manipulation",
            details: ""
          }]
        },{
          alias:"artificial_intelligence",
          name:"Artificial Intelligence",
          skill: [{
            alias:"nlp",
            name:"Foundation of Natural Language Processing",
            details: ""
          },{
            alias:"chatbot",
            name:"Foundation of Chatbot",
            details: ""
          }]
        },{
          alias:"testing_and_document_frameworks",
          name:"Testing Frameworks",
          skill: [{
            alias:"postman",
            name:"Postman",
            details: ""
          },{
            alias:"insomnia",
            name:"Kong Insomnia",
            details: ""
          },{
            alias:"K8",
            name:"k8",
            details: ""
          },{
            alias:"selenium",
            name:"Selenium",
            details: ""
          }]
        },{
          alias:"development_tools",
          name:"Development Tools",
          skill: [{
            alias:"prometheus",
            name:"Prometheus",
            details: ""
          },{
            alias:"grafana",
            name:"Grafana",
            details: ""
          },{
            alias:"otel",
            name:"Foundation of OpenTelemetry",
            details: ""
          },{
            alias:"elk",
            name:"Foundation of ELK Stack",
            details: ""
          },{
            alias:"imgproxy",
            name:"ImgProxy",
            details: ""
          },{
            alias:"docker",
            name:"Docker",
            details: ""
          },{
            alias:"k8s",
            name:"Little of K8s",
            details: ""
          },{
            alias:"datadog",
            name:"Little of Datadog",
            details: ""
          }]
        },{
          alias:"ops_skills",
          name:"DevOps",
          skill: [{
            alias:"aws",
            name:"AWS",
            details: " S3 / Lambda"
          },{
            alias:"digitalocean",
            name:"DigitalOcean",
            details: "Instance / Functions / Spaces / Database"
          },{
            alias:"azure",
            name:"Azure",
            details: "Blob Storage / SQL Server"
          },{
            alias:"cf",
            name:"Cloudflare",
            details: "",
          },{
            alias:"cicd",
            name:"CI/CD Pipeline",
            details: "(GitLab) / Auto-deploy"
          }]
        },{
          alias:"extraordinary_skills",
          name:"Extraordinary",
          skill: [{
            alias:"training",
            name:"Training Skills",
            details: "Technology Stack Training / Programming Language Training / Knowledge Sharing"
          },{
            alias:"data_governance",
            name:"Data Governance",
            details: ""
          },{
            alias:"iot",
            name:"IoT",
            details: "API Usage / Plan"
          },{
            alias:"it_support",
            name:"IT Support / Helpdesk Skill",
            details: "Crash Diagnostic / Error Diagnostic"
          },{
            alias:"graphics_design",
            name:"Graphic Design",
            details: "Adobe Illustrator / Affinity Designer"
          },{
            alias:"coffee_skills",
            name:"Coffee Brewing Skills ",
            details: "Espresso / Pour-over / Mokapot / Siphon / Immersion Brew"
          },{
            alias:"tech_stack_pioneer",
            name:"Tech-stack Pioneer",
            details: ""
          }]
        }]
      }, 300)

    },
  },
  created() {
    this.showName();
  }
}
</script>

<style scoped>
</style>