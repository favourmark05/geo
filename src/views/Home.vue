<template>
  <div>
<navSec/>
<div class="d-flex top fixed" id="wrapper">
            <!-- Sidebar-->
            <div class="border-end bg-white" id="sidebar-wrapper">
                <router-link to="#" class=" pl-3 nav-link des t-font font-weight-bold">Discription</router-link>
                <hr class="hr-1">
                <div class="list-group list-group-flus">
                  <p class="list-group p-3 font-weight-bold">Points</p>
                    <router-link to="#" class="p-3 d-flex nav-link">
                      <div class="num-circle">
                          <p>1</p>
                      </div>
                      <span class="pt-3 pl-3 text-muted">Abbesses Metro S..</span>
                    </router-link>

                    <router-link to="#" class="p-3 d-flex nav-link">
                      <div class="num-circle">
                          <p>2</p>
                      </div>
                      <span class="pt-3 pl-3 text-muted">Pigalle and the R..</span>
                    </router-link>

                    <router-link to="#" class="p-3 d-flex nav-link">
                      <div class="num-circle ">
                          <p>+</p>
                      </div>
                      <span class="pt-3 pl-3 text-muted">Create new point</span>
                    </router-link>
                    <div class="pl-3 py-2">
                      <h5>Media</h5>
                    </div>
                    <div class="pl-3">
                      <h5>Settings</h5>
                    </div>
                </div>
            </div>
            <!-- Page content wrapper-->
            <div id="page-content-wrapper">
                <!-- Top navigation-->
                <!-- Page content-->
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm-9">
                     <div class="container">
                       <nav class="navbar navbar-expand-lg navbar-light py-3">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="navbar-nav mr-auto sub-link">
                            <li class="nav-item px-3">
                              <a class="nav-link" href="#">English </a>
                            </li>
                            <li class="nav-item px-3">
                              <a class="nav-link" href="#">French</a>
                            </li>
                            <li class="nav-item px-3">
                              <a class="nav-link" href="#">Deutch</a>
                            </li>
                            <li class="nav-item px-3">
                              <a class="nav-link" href="#">Spanish</a>
                            </li>
                          </ul>
                          <form class="form-inline my-2 my-lg-0">
                            <button class="btn btn-outline-info text-black rounded-pill px-4 btn-add" @click.prevent="show ^= true" id="myCard"><i class="fas fa-plus"> Add..</i></button>
                          </form>
                        </div>
                      </nav>
                        <div class="row card-lay shadow bg-white" v-show="show" style="width: 20rem;">
                        <div class="col-sm-6">
                            <!-- <img src="..." class="card-img-top" alt="..."> -->
                            <div class="card-body text-center">
                              <div class="circle">
                              <i class="fas fa-microphone-alt icons"></i>
                              </div>
                              <p class="card-title text-muted">Record</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-body text-center">
                            <div class="circle">
                              <i class="fas fa-map-marker-alt icons"></i>
                            </div>
                              <p class="card-title text-muted">Location</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card-body text-center">
                              <div class="circle">
                                <i class="fas fa-camera icons"></i>
                              </div>
                              <p class="card-title text-muted">Photo</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-body text-center">
                            <div class="circle">
                              <i class="fas fa-language icons"></i>
                            </div>
                              <p class="card-title text-muted">Language</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card-body text-center">
                              <div class="circle">
                                <i class="fas fa-link icons"></i>
                              </div>
                              <p class="card-title text-muted">Link</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-body text-center">
                            <div class="circle">
                              <i class="fas fa-clipboard-list icons"></i>
                            </div>
                              <p class="card-title text-muted">Quiz</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-body text-center">
                            <div class="circle">
                              <i class="far fa-comment-alt icons"></i>
                            </div>
                              <p class="card-title text-muted">Hint</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-body text-center">
                            <div class="circle">
                              <i class="far fa-calendar icons"></i>
                            </div>
                              <p class="card-title text-muted">Event</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-body text-center">
                            <div class="circle">
                              <i class="fas fa-upload icons"></i>
                            </div>
                              <p class="card-title text-muted">Upload map</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-body text-center">
                            <div class="circle">
                              <i class="fas fa-certificate icons"></i>
                            </div>
                              <p class="card-title text-muted">Badge</p>
                            </div>
                        </div>
                      </div>
                      <!-- content for the main body -->
                      <div class="container contain-img">
                        <description/>
                      </div>
                     </div>
                    </div>
                    <div class="col-sm-3 ">
                      <div class="card shadow side-card">
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold ">Check List</h5>
                        <div class="d-flex justify-content-between py-1">
                        <h6>Name</h6>
                        <i class="fas fa-check-circle"></i>
                      </div>
                      <div class="d-flex justify-content-between py-1">
                        <h6>Description</h6>
                        <i class="fas fa-check-circle"></i>
                      </div>
                      <div class="d-flex justify-content-between py-1">
                        <h6>Cover Photo</h6>
                        <i class="fas fa-check-circle"></i>
                      </div>
                      <div class="d-flex justify-content-between py-1">
                        <h6>At least 1 point</h6>
                        <i class="fas fa-check-circle"></i>
                      </div>
                      <h6 class="text-muted py-1">Naration</h6>
                      <h6 class="text-muted py-1">Category</h6>
                      </div>
                      <div class="btn btn-pre rounded-pill my-2 mx-3 border border-info">Preview</div>
                      <div class="btn btn-pre mx-3 rounded-pill my-2 border border-info" data-toggle="modal" data-target="#preview">Publish</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
  </div>
  <!-- Modal -->
<div class="modal fade" id="preview" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollabl">
    <div class="modal-content">
      <div class="card-body">
        <h2 class="modal-title font-weight-bold" id="staticBackdropLabel">Publish tour</h2>
      </div>
      <div class="modal-body">
        <div class="d-flex justify-content-between">
          <p class="text-muted">Category</p>
          <span>Walking tour <i class="fas fa-angle-right pl-2 flex"></i></span>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-muted">Tour type</p>
          <span>Quest <i class="fas fa-angle-right pl-2 flex"></i></span>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-muted">Privacy</p>
          <span>Code protected <i class="fas fa-angle-right pl-2 flex"></i></span>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-muted">Schedule</p>
          <span>MWS <i class="fas fa-angle-right pl-2 flex"></i></span>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-muted">Gamification</p>
          <span>None <i class="fas fa-angle-right pl-2 flex"></i></span>
        </div>
        <hr>
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-pre rounded-pill my-2 mx-3 border border-info px" data-dismiss="modal" @click.prevent="done ^= true">Publish</button><br>
        <button type="button" class="btn btn-pre rounded-pill my-2 mx-3 border border-info px" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
<div class="modal-dialog-centered modal " v-show="done">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="card-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span @click.prevent="done = false">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
        <div class="text-center pb-5">
          <i class="fas fa-check-circle tour-check"></i>
        </div>
        <h1 class="text-info">Hurray!</h1>
        <p class="text-muted">Your tour is live. <br> Share it to become noticed</p>
        <div class="d-flex justify-content-around">
          <i class="fab fa-facebook-f text-muted"></i>
          <i class="fab fa-twitter text-muted"></i>
          <i class="fas fa-envelope"></i>
          <i class="fas fa-link"></i>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-pre rounded-pill my-4 mx-5 border border-info py">View my tour</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      done: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.numbers{
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 10px 10px 12px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.first-row{
  height: 110vh;
}
.fas{
  color: rgb(129, 128, 128) !important;
}
.card-lay{
  margin-left: 35vw;
  position: absolute;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 2s;
  animation-name: animatebottom;
  animation-duration: 2s;
  z-index: 10;
}
@-webkit-keyframes card-lay {
  from { bottom:-50px; opacity:0 }
  to { bottom:0px; opacity:1 }
}
@keyframes card-lay{
  from{ bottom:-50px; opacity:0 }
  to{ bottom:0; opacity:1 }
}
.circle{
      background: #2daee11f;
  border-radius: 100%;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 3.5em;
  margin-right: 5px;
  text-align: center;
  width: 4.1em;
  align-content: center;
  border: 0.1px solid #2DAEE1;
}
.icons{
  color: #2DAEE1 !important;
  font-size: 25px;
  margin-top: 20px !important;
}
.top{
  padding-top: 85px;
}
.btn-add:focus, .btn-add:hover{
  background-color: white;
}
.side-card{
  margin-top: 75px;
}
.fa-check-circle{
  color: #0BCD74 !important;
}
.btn-pre{
  background-color: white;
}
.btn-pre:hover{
  background-color: #2DAEE1;
  color: white;
}
.px{
  padding: 13px 10rem;
}
.py{
  padding: 10px 6rem;
  /* margin: 0 10rem; */
}
.tour-check{
  font-size: 10rem;
  color: #2DAEE1 !important;
}
.num-circle {
    border: 0.1em solid rgb(216, 213, 213);
    border-radius: 100%;
    height: 3em;
    width: 3em;
    text-align: center;
}

.num-circle > p {
margin-top: 0.3em;
    font-size: 20px;
    font-weight: bold;
    font-family: sans-serif;
    color: grey;
}
.sub-link > .nav-item:focus {
color: teal !important;
}
.des{
  color: black;
  font-size: 24px;
  /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
}
.t-font{
  font-family: 'Fira Sans Condensed', sans-serif;
}
.hr-1{
  color: #2DAEE1;
}
</style>
