const app = document.getElementById("app")

function updateView() {
   app.innerHTML = `
   <div class="app flex column">
   ${staticView()}
   </div>
   `
}
updateView()

function staticView() {
   return `
   <input>
   <input type="date">
   `
}