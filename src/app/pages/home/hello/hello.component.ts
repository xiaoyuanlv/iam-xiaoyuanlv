import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Actionlist } from 'src/app/models/actionlist.model';
import { ActionlistService } from 'src/app/shared/services/actionlist.service';

import { Info } from 'src/app/models/info.model';
import { InfoService } from 'src/app/shared/services/info.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [DatePipe]
})
export class HelloComponent implements OnInit {

  w1upper = '';
  w2upper = '';
  w3upper = '';
  w4upper = '';

  currentMonth;
  currentDate: number;
  currentWeekday;

  mcurrentDate = new Date();

  currentHr: any;
  labsImage = 'clabsnight.png';

  actionlist: Array<Actionlist> = [];
  infoList: Array<Info> = [];

  constructor(private datePipe: DatePipe, private actionlistSvc: ActionlistService, private infoSvc: InfoService) {

    this.currentMonth = this.datePipe.transform(this.mcurrentDate, 'MMM yyyy');

    this.currentDate = Number(this.datePipe.transform(this.mcurrentDate, 'd'));

    this.currentWeekday = this.datePipe.transform(this.mcurrentDate, 'EEEE');

    if (this.currentDate >= 1 && this.currentDate <= 7) {
      this.w1upper = 'upper';
    } else if (this.currentDate > 7 && this.currentDate <= 14) {
      this.w2upper = 'upper';
    } else if (this.currentDate > 14 && this.currentDate <= 21) {
      this.w3upper = 'upper';
    } else {
      this.w4upper = 'upper';
    }

    this.currentHr = Number(this.datePipe.transform(this.mcurrentDate, 'H'));
    if (this.currentHr >= 4 && this.currentHr < 20) {
      this.labsImage = 'clabsday.png';
    }

  }

  ngOnInit(): void {
    this.getActionList();
    this.runtheworld();
    this.getInfoList()
  }

  runtheworld() {

    var theInstructions = `  (function () {
     
      const container = document.getElementById("globe");
      const canvas = container.getElementsByTagName("canvas")[0];

      const globeRadius = 100;
      const globeWidth = 4098 / 2;
      const globeHeight = 1968 / 2;

      function convertFlatCoordsToSphereCoords(x, y) {
          let latitude = ((x - globeWidth) / globeWidth) * -180;
          let longitude = ((y - globeHeight) / globeHeight) * -90;
          latitude = (latitude * Math.PI) / 180;
          longitude = (longitude * Math.PI) / 180;
          const radius = Math.cos(longitude) * globeRadius;

          return {
              x: Math.cos(latitude) * radius,
              y: Math.sin(longitude) * globeRadius,
              z: Math.sin(latitude) * radius
          };
      }

   
      function makeMagic(points) {
          const {
              width,
              height
          } = container.getBoundingClientRect();

         
          // 1. Setup scene
          const scene = new THREE.Scene();
         
          // 2. Setup camera
          const camera = new THREE.PerspectiveCamera(45, width / height);
          // 3. Setup renderer
          const renderer = new THREE.WebGLRenderer({
              canvas,
              antialias: true
          });

         

          renderer.setSize(width, height);

          
          // 4. Add points to canvas
          // - Single geometry to contain all points.
          const mergedGeometry = new THREE.Geometry();

        
          // - Material that the dots will be made of.
          const pointGeometry = new THREE.SphereGeometry(0.5, 1, 1);
          const pointMaterial = new THREE.MeshBasicMaterial({
              color: "#989db5",
          });

         

          for (let point of points) {
              const {
                  x,
                  y,
                  z
              } = convertFlatCoordsToSphereCoords(
                  point.x,
                  point.y,
                  width,
                  height
              );

              if (x && y && z) {
                  pointGeometry.translate(x, y, z);
                  mergedGeometry.merge(pointGeometry);
                  pointGeometry.translate(-x, -y, -z);
              }
          }

          

          const globeShape = new THREE.Mesh(mergedGeometry, pointMaterial);
          scene.add(globeShape);

         

          // Setup orbital controls
          camera.orbitControls = new THREE.OrbitControls(camera, canvas);
          camera.orbitControls.enableKeys = false;
          camera.orbitControls.enablePan = false;
          camera.orbitControls.enableZoom = false;
          camera.orbitControls.enableDamping = false;
          camera.orbitControls.enableRotate = true;
          camera.orbitControls.autoRotate = true;
          camera.position.z = -265;

          
          animate();
         
          function animate() {
              // orbitControls.autoRotate is enabled so orbitControls.update
              // must be called inside animation loop.
              camera.orbitControls.update();
              requestAnimationFrame(animate);
              renderer.render(scene, camera);
             
          }
         
      }

      function hasWebGL() {
          const gl =
              canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
          if (gl && gl instanceof WebGLRenderingContext) {
              return true;
          } else {
              return false;
          }
      }

      function init() {
          if (hasWebGL()) {
              
              window.fetch("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/js/points.json")
                  .then(response => response.json())
                  .then(data => {
                      makeMagic(data.points);
                  });
          }
      }
      init();
  })();`;

  var F=new Function (theInstructions);
  
  return(F());


  }

  getActionList() {
    this.actionlistSvc.getActionlist().subscribe(data => {
      this.actionlist = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Object
        } as Actionlist;
      })
    });
  }

  getInfoList() {
    this.infoSvc.getInfo().subscribe(data => {
      this.infoList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Object
        } as Info;
      })
    });
  }

}
