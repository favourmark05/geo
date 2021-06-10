<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 border-bottom border-secondar shadow fixed-top">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/geologo.png" width="90" height="40" class="d-inline-block align-top" alt="">
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto second-list">
          <li class="nav-item px-4">
            <a class="nav-link" href="#">Discover</a>
          </li>
          <li class="nav-item px-4">
            <router-link to="create" class="nav-link text-info" href="#">Create</router-link>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link btn btn-secondary rounded-pill text-white px-4" href="#">Download</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav">
            <li class="nav-item px-3">
              <i class="far fa-bookmark nav-link"></i>
            </li>
            <li class="nav-item px-3">
              <i class="far fa-bell nav-link"></i>
            </li>
            <li class="nav-item profile" @click.prevent="profile ^= true">
              <img
                src="data:image/jpeg;base64,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"
                class="nav-link img-fluid rounded-circle p-img"
              />
            </li>
          </ul>
        </form>
      </div>
      <div class="card bg-light mb-3 " style="max-width: 18rem;" v-show="profile">
  <div class="card-header d-flex border-info border profile-head">
    <img
    src="data:image/jpeg;base64,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"
    class="img-fluid rounded-circle pro-img"
    />
    <div class="px-3 ">
      <span class="spn font-weight-bold">Lawrence Power</span> <br>
      <span class="text-muted spn">My page</span>
    </div>
    <i class="fas fa-qrcode ml-4"></i>
  </div>
  <div class="card-body">
    <div class="d-flex flex">
      <i class="far fa-user-circle p-font"></i>
      <span class="pl-5 spn">Edit Profile</span>
    </div>
    <div class="d-flex flex">
      <i class="fas fa-cog p-font"></i>
      <span class="pl-5 pt-2 spn">Settings</span>
    </div>
    <div class="d-flex flex">
      <i class="fas fa-power-off p-font"></i>
      <span class="pl-5 pt-2 spn">Log out</span>
    </div>
    <div class="d-flex justify-content-between">
      <span class="text-muted pt-4">English</span>
      <i class="fas fa-angle-right pt-2 text-muted flex"></i>
    </div>
  </div>
</div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      profile: false
    }
  }
}
</script>

<style scoped>
.second-list {
  padding-left: 30vw;
}
.p-img{
  height: 50px;
  width: 50px;
}
.far{
  font-size: 1.5em;
}
.profile{
  cursor: pointer;
}
.card{
  z-index: 10 !important;
  position: absolute;
  margin-left: 74vw;
  margin-top: 300px;
}
.pro-img{
  height: 40px;
  width: 40px;
}
.fas{
  font-size: 30px;
  margin-top: 10px;
}
.spn{
  /* padding-top: -100px !important; */
  font-size: 14px;
}
.profile-head{
  background-color: rgba(127, 255, 212, 0.158);
}
.p-font{
  font-size: 17px;
  color: #2DAEE1;
}
.flex{
  cursor: pointer;
}
</style>
