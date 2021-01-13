function applycss(css){
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}

applycss(`
:root, .__fb-light-mode {
    --card-background: #1e1e1e;
    --comment-background: #292929;
    --card-background-flat: #292929;
    --disabled-button-background: #373737;
    --divider: #4d4d4d;
    --hosted-view-selected-state: #1D2731;
    --hover-overlay: rgba(255, 255, 255, 0.05);
    --media-inner-border: rgba(255, 255, 255, 0.1);
    --messenger-card-background: #1e1e1e;
    --overlay-alpha-80: rgba(41, 41, 41, 0.8);
    --popover-background: #1e1e1e;
    --primary-icon: #cecece;
    --primary-text: #cecece;
    --scroll-thumb: #5d5d5d;
    --secondary-button-background: #353535;
    --secondary-icon: #999;
    --secondary-text: #999;
    --shadow-1: rgba(0, 0, 0, 0.3);
    --shadow-2: rgba(0, 0, 0, 0.4);
    --shadow-5: rgba(0, 0, 0, 0.7);
    --shadow-8: rgba(0, 0, 0, 1);
    --shadow-inset: rgba(000, 000, 000, 0.5);
    --surface-background: #1e1e1e;
    --wash: #373737;
    --web-wash: #1e1e1e;
}

body {
    color: #cecece;
}

/* Delivered icon on left*/
.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.aovydwv3.p8cu3f6v.kb5gq1qc.taijpn5t.b0upgy8r path, .l9j0dhe7.swg4t2nn path, .a8c37x1j.ms05siws.hwsy1cff.b7h9ocf4 path {
    fill: #cecece;
}

path[d="M0 36h36V0H0z"] {
    fill: none !important;
}

/* Icons */
path[d="M18 30c-6.627 0-12-5.372-12-12 0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12 0 6.628-5.372 12-12 12zm5.294-16.707l-7.296 7.295-3.254-3.252c-.352-.353-.919-.439-1.323-.148a1 1 0 00-.128 1.522l3.998 3.997a1 1 0 001.414 0l8.002-8.001a1 1 0 10-1.413-1.413z"] {
    fill: #999;
}

.sp_o5t_XtHjhxN_1_5x {
    filter: invert(.8);
}

/* App download */
.oajrlxb2.q2y6ezfg.gcieejh5.bn081pho.humdl8nn.izx4hr6d.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.d1544ag0.qt6c0cv9.tw6a2znq.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.beltcj47.p86d2i9g.aot14ch1.kzx2olss.cbu4d94t.taijpn5t.ni8dbmo4.stjgntxs.k4urcfbm.tv7at329 {
    background: #1e1e1e;
}

.sn0e7ne5 {
    box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 2px;
}

/* Middle header */
.bafdgad4 {
    box-shadow: 0 0 4px rgba(0,0,0,.7)
}

/* Pop-up close icon */
.sp_GOPGoqMu6Pq_1_5x {
    filter: invert(.8);
}

/* Feedback icons */
.sp_BQbKIpOzOAx_1_5x, .sp_a51jIvPl6dA_1_5x {
    filter: invert(.8);
}
`);
