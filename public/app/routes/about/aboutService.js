angular.module('myApp').service('aboutService', function(){

var techList = {
    responsive: 'Responsive designs fit multiple screen sizes, adjusting automatically to phones, tablets, desktops, and even rotation of screens.',
    gulp: 'Gulp is a toolkit that automates time-consuming tasks in the development workflow, such as script linking and css pre-processing with Sass/Scss.',
    scss: 'Scss is a css pre-processor that allows nested css declarations and variable declarations.',
    babel: 'Babel js is a compiler that helps translate newer Javascript code into older, browser compatible versions.',
    animations: 'Css animations let an element gradually change from one style to another. **Css Animations were used on my navigation bar, both for the mobile-nav and the desktop-nav.',
    html: 'HTML is the basic language of the internet.',
    js: 'Javascript is the programming language used to create interactive effects within the website. **ES6 arrow functions were used consistently throughout the website.',
    angular: 'Angular js is the structural framework used to make the website dynamic more simply than by using javascript by itself.',
    api: 'An API call accesses data from a server somewhere on the internet. **Both of the movie search pages and the daily quote page all use an API.',
    routing: 'UI-Routing allows for multiple views in a single page application(SPA). Instead of loading a new page each time you use the navigation bar, the view itself changes.',
    directive: 'Custom Angular directives extend the functionality of plain HTML. **The home page search results use a custom Angular directive that highlights any movie you click on.'
}

this.getTech = tech => {
    return techList[tech];
}










})