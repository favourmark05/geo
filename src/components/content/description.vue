<template>
  <div>
      <div class="container rounded content">
          <div class="d-flex contain btn ">
              <i class="fas fa-camera icons text-white"></i>
              <p class="text-white px-2">Set Cover</p>
          </div>
      </div>
      <div class="container py-5">
          <h1>A walking trail of Montmartre, Paris</h1>
          <hr>
          <p>
              Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the leafy hilltop village of Montmartre was once the play area of Paris’s most famous artists, bohemians and creatures of the night. These days, the winding cobbled streets host chic cafes, retro boutiques and fine French dining but, if you look closely enough, those in search of historical secrets can still find traces of the old La Bohème hidden between the tourist traps…
          </p>
          <hr>
          <h5 class="py-3">Tags</h5>
          <div class="tags d-flex">
              <div class="btn rounded-circle text-muted add-btn"><i class="fas fa-plus pt-1 icons"></i></div>
              <div class="btn rounded-pill text-muted add-btn mx-3">Montmatre <span class="rounded-circle py-1 px-1 text-white">X</span></div>
              <div class="btn rounded-pill text-muted add-btn ">Paris <span class="rounded-circle py-1 px-1 text-white">X</span></div>
          </div>
          <div class="cartegories pt-5">
              <h4 class="pt-5">Categories</h4>
              <div class="row text-center py-2">
                  <div class="col-sm bg-white card mx-2 py-4 px-4 ">
                      <i class="fas fa-vihara "></i>
                      <p>Architecture</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-city"></i>
                      <p>City Tours</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-biking"></i>
                      <p>Cycling</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-car-side"></i>
                      <p>Driving</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-book-open"></i>
                      <p>Educational</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-ghost"></i>
                      <p>Haunted</p>
                  </div>
              </div>
              <div class="row text-center py-2">
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-hamburger"></i>
                      <p>Food</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-globe"></i>
                      <p>Heritage</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-tree"></i>
                      <p>Nature</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-shopping-bag"></i>
                      <p>Shopping</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-walking"></i>
                      <p>Walking</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fab fa-accessible-icon "></i>
                      <p>Accessible</p>
                  </div>
              </div>
              <div class="row text-center py-2">
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-baby"></i>
                      <p>For Kids</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-water"></i>
                      <p>River</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-hotel"></i>
                      <p>Hotels</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-subway"></i>
                      <p>Trains</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="far fa-comments"></i>
                      <p>Described</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-egg"></i>
                      <p>Easter Hunt</p>
                  </div>
              </div>
              <div class="row text-center py-2" style="width: 38rem; height: 100%">
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-palette"></i>
                      <p>Art & Culture</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-icons"></i>
                      <p>Entertainment</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-dna"></i>
                      <p>Life Journey</p>
                  </div>
                  <div class="col-sm bg-white card mx-2 py-4 px-4">
                      <i class="fas fa-gopuram"></i>
                      <p>Religions</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
    background-image: linear-gradient(rgba(128, 128, 128, 0),rgba(128, 128, 128, 0),rgba(128, 128, 128, 0.61)),  url('https://www.discoverlosangeles.com/sites/default/files/images/2019-01/OldChinatown-Central-Plaza-Yuri.jpg');
    background-size: cover;
    height: 30vh;
    width: 55vw;
}
.contain{
    padding-top: 26vh;
}
.icons{
    font-size: 20px !important;
}
hr{
    border: none;
  height: 1px;
  background: #000;
  background: repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px);
}
.add-btn{
    background-color: #2daee11f;
    border: 1px solid #2DAEE1;
}
span{
    background-color: gray;
    font-size: 8px;
}
.card:hover, .fas:hover {
background-color: #2DAEE1 !important;
cursor: pointer;
color: white !important;
box-shadow: 5px 5px 10px #2DAEE1;
}
.fas, .fab, .far{
    font-size: 50px;
    margin-bottom: 0 20px;
    color: #2DAEE1 ;
}
.bg-white > p {
    margin-top: 30px;
    font-size: 12px;
}
.icons:hover{
    box-shadow: none !important;
    background-color: transparent !important;
}
</style>
