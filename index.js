const timeine = gsap.timeline({repeat: -1, repeatDelay: 4, defaults: {duration : 4 }})
timeine
.from('.slide1',{opacity : 0.8, ease:'power3.out' })
.from('.slide2',{opacity : 0, ease:'power3.out' })
.from('.slide3',{opacity : 0, ease:'power3.out' })
.from('.slide4',{opacity : 0, ease:'power3.out' })
.from('.slide5',{opacity : 0, ease:'power3.out' })

const t1 = gsap.timeline({repeat: -1, defaults: {duration : 6 }})
t1
.from('.text1',{x:'-100%', opacity : 0, ease:'power1.out', },'<1')
.to('.text1',{x:'-100%', delay:2.9, opacity : 0, ease:'power1.out' })

.from('.text2',{x:'-100%', opacity : 0, ease:'power1.out', },'<1')
.to('.text2',{x:'-100%', delay:2.9, opacity : 0, ease:'power1.out' })

.from('.text3',{x:'-100%', opacity : 0, ease:'power1.out',  },'<1')
.to('.text3',{x:'-100%', delay:2.9, opacity : 0, ease:'power3.out' })

.from('.text4',{x:'-100%', opacity : 0, ease:'power1.out',  },'<-.5')
.to('.text4',{x:'-100%', delay:2.9, opacity : 0, ease:'power1.out' })

