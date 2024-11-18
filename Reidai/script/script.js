// JavaScript用ファイル
new Vue({
    el: '#app',
    
    data: {
      pass:'',
      passcheck:''
    },
    computed: {
      passMismatch(){
        return this.pass && this.passcheck && this.pass !== this.passcheck;
        },
      canRegister(){
        return this.pass && this.passcheck && !this.passMismatch;
      }
      }
  });