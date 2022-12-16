<template>
  <div class="container font-apFont">
    <div class="flex flex-col md:flex-row m-3">
      <div class="transition-all duration-50 p-2 hover:skew-y-6">
        <div class="transition-all duration-50 avatar md:hover:pr-4">
          <div class="transition-all duration-50 max-w-screen md:w-96 rounded-b-xl rounded-t-xl animate__animated animate__fadeIn">
            <nuxt-img src="/pics/arsanandha-newpro.png" alt="Profile" format="webp"/>
          </div>
        </div>
        <nuxt-img src="/svg/logo.svg" alt="arsanandha" class="p-3 pt-9 visible animate__animated animate__fadeInUp"/>
      </div>
      <div class="transition-all duration-50 p-2 text-left hover:-skew-y-6">
        <h1 class="text-5xl pl-3 pb-3 pt-2 pr-6 text-bold animate__animated animate__fadeInDown text-white" v-if="showLogo"><b>
          {{ title }}
        </b></h1>
        <p class="pl-3 animate__animated animate__fadeInDown text-white" v-if="showLogo">Scroll for more information.</p>
          <div class="overflow-y-scroll scrollbar-hide h-80 w-76 pl-3 pt-2 font-apMonoFont snap-y">
            <TransitionGroup :css="false" tag="div" class="w-76" @after-enter="onEnter" @leave="onLeave">
            <div class="w-76 rounded bg-primary mb-3 snap-start" v-for="(info, index) in skills" :key="info.alias" :data-index="index">
              <div class="p-3">
                <h1 class="text-xl text-neutral font-bold ml-2">{{ info.name }}</h1>
                <h3 class="ml-2 text-neutral">Total {{ info.skill.length }} Skills</h3>
                <div class="p-1">
                  <div class="badge rounded ml-2 p-2 bg-accent hover:font-bold break-words border-none text-white" v-for="(more, index) in info.skill" :key="more.name" :data-index="index">
                    {{ more.name }}
                  </div>
                </div>
              </div>
            </div>
            </TransitionGroup>
          </div>
        <div class="pl-3 pt-5 pb-5">
          <nuxt-link to="/" class="btn font-bold rounded bg-gradient-to-r from-orange-500 to-red-500 hover:from-violet-500 hover:to-orange-500 text-white">Back</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";

export default {
  name: "TotoSkillsComponents",
  data() {
    return {
      text: "as soon as possible.",
      customGreet: "",
      showLogo: false,
      positionShow: "",
      skills: [],
      title: "Skills"
    }
  },
  methods: {
    showName: function () {
      setTimeout(() => {
        this.customGreet = "Asanan Aphisitworachorch";
        this.showLogo = true;
        this.positionShow = "Backend Developer"
        this.skills = [{
          alias: "programming_language",
          name: "Programming Language",
          skill: [{
            alias: "js",
            name: "JavaScript",
            details: "",
            skillsLevel: 10
          }, {
            alias: "ts",
            name: "TypeScript",
            details: "",
            skillsLevel: 10
          }, {
            alias: "golang",
            name: "Golang",
            details: "",
            skillsLevel: 10
          }, {
            alias: "csharp",
            name: "C#",
            details: "",
            skillsLevel: 10
          }, {
            alias: "java",
            name: "Java",
            details: "",
            skillsLevel: 10
          }, {
            alias: "php",
            name: "PHP",
            details: "",
            skillsLevel: 10
          }, {
            alias: "arduinocpp",
            name: "Arduino C++",
            details: "",
            skillsLevel: 10
          }]
        }, {
          alias: "os",
          name: "Operating Systems",
          skill: [{
            alias: "win",
            name: "Windows (Server)",
            details: "",
            skillsLevel: 10
          }, {
            alias: "linux",
            name: "Linux Distros (Ubuntu / Fedora / RHEL)",
            details: "",
            skillsLevel: 10
          }, {
            alias: "macos",
            name: "macOS",
            details: "",
            skillsLevel: 10
          }]
        }, {
          alias: "programminglang_frameworks",
          name: "Programming Frameworks",
          skill: [{
            alias: "nestjs",
            name: "NestJS",
            details: "",
            skillsLevel: 10
          }, {
            alias: "express",
            name: "Express",
            details: "",
            skillsLevel: 10
          }, {
            alias: "laravel",
            name: "Laravel",
            details: "",
            skillsLevel: 10
          }, {
            alias: "gin",
            name: "Gin",
            details: "",
            skillsLevel: 10
          }, {
            alias: "django",
            name: "Django",
            details: "",
            skillsLevel: 10
          }, {
            alias: "flask",
            name: "Flask",
            details: "",
            skillsLevel: 10
          }, {
            alias: "fastapi",
            name: "FastAPI",
            details: "",
            skillsLevel: 10
          }, {
            alias: "aspnet",
            name: "ASP.net (MVC/Core)",
            details: "",
            skillsLevel: 10
          }, {
            alias: "nuxtjs",
            name: "Nuxt (Vue)",
            details: "",
            skillsLevel: 10
          }]
        }, {
          alias: "databases",
          name: "Databases",
          skill: [{
            alias: "postgresql",
            name: "PostgreSQL",
            details: "",
            skillsLevel: 10
          }, {
            alias: "supabase",
            name: "Supabase",
            details: "",
            skillsLevel: 10
          }, {
            alias: "mysql",
            name: "MySQL + MariaDB",
            details: "",
            skillsLevel: 10
          }, {
            alias: "mssql",
            name: "Microsoft SQL Server",
            details: "",
            skillsLevel: 10
          }, {
            alias: "redis",
            name: "Redis",
            details: "",
            skillsLevel: 10
          }, {
            alias: "mongo",
            name: "MongoDB",
            details: "",
            skillsLevel: 10
          }]
        }, {
          alias: "styling_css_frameworks",
          name: "CSS Styling Frameworks",
          skill: [{
            alias: "bs",
            name: "Bootstrap",
            details: "",
            skillsLevel: 10
          }, {
            alias: "tailwind",
            name: "TailwindCSS",
            details: "",
            skillsLevel: 10
          }, {
            alias: "tw_daisy",
            name: "TailwindCSS + daisyUI",
            details: "",
            skillsLevel: 10
          }, {
            alias: "uikit",
            name: "UIKit",
            details: "",
            skillsLevel: 10
          }]
        }, {
          alias: "datascience_skills",
          name: "Data Science",
          skill: [{
            alias: "tableau",
            name: "Tableau",
            details: "",
            skillsLevel: 10
          }, {
            alias: "excel",
            name: "Microsoft Excel",
            details: "",
            skillsLevel: 10
          }, {
            alias: "csv",
            name: "Comma Separated Value File",
            details: "",
            skillsLevel: 10
          }, {
            alias: "webscraping",
            name: "Web Scraping with Data Manipulation",
            details: "",
            skillsLevel: 10
          }]
        }, {
          alias: "artificial_intelligence",
          name: "Artificial Intelligence & ML",
          skill: [{
            alias: "nlp",
            name: "Natural Language Processing",
            details: "",
            skillsLevel: 10
          }, {
            alias: "chat_bot",
            name: "Chat bot",
            details: "",
            skillsLevel: 10
          }]
        },{
          alias: "3rd_party_integration",
          name: "3rd Party Integrations",
          skill: [{
            alias: "line",
            name: "LINE APIs",
            details: "",
            skillsLevel: 10
          }, {
            alias: "discord",
            name: "Discord APIs",
            details: "",
            skillsLevel: 10
          }, {
            alias: "meta",
            name: "Meta APIs",
            details: "",
            skillsLevel: 10,
          }, {
            alias: "tw",
            name: "Twitter APIs",
            details: "",
            skillsLevel: 10,
          }, {
            alias: "google",
            name: "Google APIs",
            details: "",
            skillsLevel: 10,
          }]
        }, {
          alias: "testing_and_document_frameworks",
          name: "Testing Frameworks",
          skill: [{
            alias: "postman",
            name: "Postman",
            details: "",
            skillsLevel: 10
          }, {
            alias: "insomnia",
            name: "Kong Insomnia",
            details: "",
            skillsLevel: 10
          }, {
            alias: "K8",
            name: "k8",
            details: "",
            skillsLevel: 10
          }, {
            alias: "selenium",
            name: "Selenium",
            details: "",
            skillsLevel: 10
          }]
        }, {
          alias: "development_tools",
          name: "Development Tools",
          skill: [{
            alias: "nginx",
            name: "NGINX",
            details: "",
            skillsLevel: 10,
          },{
            alias: "caddy2",
            name: "Caddy 2",
            details: "",
            skillsLevel: 10,
          }, {
            alias: "elk",
            name: "ELK Stacks",
            details: "",
            skillsLevel: 10
          }, {
            alias: "imgproxy",
            name: "ImgProxy",
            details: "",
            skillsLevel: 10
          }, {
            alias: "docker",
            name: "Docker (include containerd)",
            details: "",
            skillsLevel: 10
          }]
        }, {
          alias: "ops_skills",
          name: "DevOps + Cloud Service",
          skill: [{
            alias: "aws",
            name: "AWS",
            details: "S3 / Lambda",
            skillsLevel: 10
          }, {
            alias: "digitalocean",
            name: "DigitalOcean",
            details: "Instance / Functions / Spaces / Database",
            skillsLevel: 10
          }, {
            alias: "azure",
            name: "Azure",
            details: "Blob Storage / SQL Server",
            skillsLevel: 10
          }, {
            alias: "cf",
            name: "Cloudflare",
            details: "",
            skillsLevel: 10
          }, {
            alias: "cicd",
            name: "CI/CD Pipeline",
            details: "(GitLab) / Auto-deploy",
            skillsLevel: 10
          }]
        }, {
          alias: "extraordinary_skills",
          name: "Extraordinary",
          skill: [{
            alias: "training",
            name: "Training Skills",
            details: "Technology Stack Training / Programming Language Training / Knowledge Sharing",
            skillsLevel: 10
          }, {
            alias: "data_governance",
            name: "Data Governance",
            details: "",
            skillsLevel: 10
          }, {
            alias: "iot",
            name: "IoT",
            details: "API Usage / Plan",
            skillsLevel: 10
          }, {
            alias: "it_support",
            name: "IT Support / Helpdesk Skill",
            details: "Crash Diagnostic / Error Diagnostic",
            skillsLevel: 10
          }, {
            alias: "graphics_design",
            name: "Graphic Design",
            details: "Adobe Illustrator / Affinity Designer",
            skillsLevel: 10
          }, {
            alias: "coffee_skills",
            name: "Coffee Brewing Skills ",
            details: "Espresso / AeroPress / Pour-over / Immersion Brew",
            skillsLevel: 10
          }, {
            alias: "tech_stack_pioneer",
            name: "Tech-stack Pioneer",
            details: "",
            skillsLevel: 10
          }]
        }]
      }, 300)

    },
    onEnter: function(el, done) {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
    onLeave: function(el, done) {
      gsap.to(el, {
        opacity: 0,
        y: 100,
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
  },
  created() {
    this.showName();
  }
}
</script>

<style scoped>
</style>