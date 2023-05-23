<template>
<section>
    <div class="container text-center pt-5">
        <div class="row">
            <div class="col-3">
                <div class="d-flex">
                    <div class="dropdown me-1">
                        <button type="button" class="btn btn-outline-light button-homepage account-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                            Offset
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-light button-homepage account-button">Reference</button>
                        <button type="button" class="btn btn-outline-light button-homepage account-button dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-9">
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                </ul>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "ProductView"
}
</script>

<style scoped>


input {
    background-color: transparent !important;
    /*background-color: grey;*/
    color: whitesmoke;
}

.account-button {
    font-size: 15px !important;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000 !important;
}

</style>