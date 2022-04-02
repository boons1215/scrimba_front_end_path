// class Module {
//     constructor() {
//         this.courseName = "Learn JS"
//         this.studentsEnrolled = 5600
//         this.studentCompleted = 5100
//     }
// }

// const learnJs = new Module

// console.log(learnJs.courseName)

// const moduleStats = {
//     module1: {
//         moduleName: 'Learn JS',
//         studentsEnrolled: 2340,
//         studentsCompleted: 2210
//     },
//     module2: {
//         moduleName: 'CSS Basics',
//         studentsEnrolled: 1893,
//         studentsCompleted: 1810
//     },
//     module3: {
//         moduleName: 'Responsive Design',
//         studentsEnrolled: 4600,
//         studentsCompleted: 4357
//     }
// }

// class Module {
//     constructor(data) {
//         Object.assign(this, data)
//         this.percentCompletedModule = this.studentsCompleted / this.studentsEnrolled * 100
//     }
//     logsPercentCompletedModule() {
//         return this.percentCompletedModule
//     }
// }

// const a = new Module(moduleStats.module3)
// console.log(a.logsPercentCompletedModule())

//

const adData = {
    facebook: {
        site: "Facebook",
        adViews: 23477,
        clicks: 210,
        conversions: 5,
    },
    instagram: {
        site: "Instagram",
        adViews: 13904,
        clicks: 192,
        conversions: 9,
    },
    twitter: {
        site: "Twitter",
        adViews: 12301,
        clicks: 32001,
        conversions: 2,
    }
}

class AdvertisingChannel {
    constructor(data) {
        Object.assign(this, data)
        this.conversionRate = (this.conversions / this.clicks * 100).toFixed(1)
    }
    getAdvertisingChannelHtml() {
        return `
            <div class="site-name"> ${this.site} </div>
                <div>Views: ${this.adViews} </div>
                <div>Clicks: ${this.clicks} </div>
                <div>Conversions: ${this.conversions} </div>
            <div>Conv. Rate: <span class="highlight"> ${this.conversionRate} %</span></div>  
        `
    }
}

const facebook = new AdvertisingChannel(adData.facebook)
const instagram = new AdvertisingChannel(adData.instagram)
const twitter = new AdvertisingChannel(adData.twitter)

document.getElementById("fb").innerHTML = facebook.getAdvertisingChannelHtml()
document.getElementById("twit").innerHTML = twitter.getAdvertisingChannelHtml()
document.getElementById("insta").innerHTML = instagram.getAdvertisingChannelHtml()