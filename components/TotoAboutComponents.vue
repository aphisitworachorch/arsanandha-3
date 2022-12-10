<template>
  <div class="container font-apFont"  >
    <div class="flex flex-col md:flex-row m-3">
      <div class="p-2">
        <div class="avatar">
          <div class="w-96 rounded-b-xl rounded-t-xl">
            <img :src="switchProfile" />
          </div>
        </div>
        <img src="../assets/svg/logo.svg" alt="arsanandha" class="p-3 invisible md:visible"/>
      </div>
      <div class="p-2 text-left">
        <h1 class="text-5xl p-5 text-bold"><b>
          About Me
        </b></h1>
        <div class="overflow-y-scroll scrollbar-hide h-80 w-76">
          <div class="stats stats-vertical shadow">
            <div class="stat" v-for="db in skills">
              <div class="stat-title"><b>Skills</b></div>
              <div class="stat-value">{{ db.name }}</div>
              <div class="stat-desc">Total {{ db.skill.length }} Skills</div>
            </div>
          </div>
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
          name:"Programming Frameworks",
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
          name:"Data Science",
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
          name:"Artificial Intelligence",
          skill: [{
            alias:"nlp",
            name:"Foundation of Natural Language Processing"
          },{
            alias:"chatbot",
            name:"Foundation of Chatbot"
          }]
        },{
          alias:"testing_and_document_frameworks",
          name:"Testing Frameworks",
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
          name:"DevOps",
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
          name:"Extraordinary",
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
            name:"Coffee Brewing Skills (Espresso / Pour-over / Mokapot / Siphon / Immersion Brew)"
          },{
            alias:"tech_stack_pioneer",
            name:"Tech-stack Pioneer"
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