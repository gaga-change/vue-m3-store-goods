<template id="go-top">
    <div>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <a id="BackToTop" @click="goTop" v-show="goTopEnable"></a>
        </transition>
    </div>
</template>
<script>
    export default {
        template: '#go-top',
        data() {
            return {
                goTopEnable: false,
                dom: window,
            }
        },
        props: ['controlId'],
        mounted: function () {
            this.watchGoTop();
        },
        methods: {
            watchGoTop: function () {
                var self = this;
                if (self.controlId && self.$parent.$refs[self.controlId]) {
                    self.dom = self.$parent.$refs[self.controlId];
                }

                self.dom.addEventListener('scroll', function () {
                    if (self.dom.scrollY > 200 || self.dom.scrollTop > 500) {
                        self.goTopEnable = true;
                    } else {
                        self.goTopEnable = false;
                    }
                });
            },
            goTop: function () {
                var self = this;
                if (self.dom == window) {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                } else {
                    self.dom.scrollTop = 0;
                }
            }
        },
    }
</script>

<style scoped>
    #BackToTop{
        z-index: 20 !important;
    }
</style>


