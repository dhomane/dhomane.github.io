"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[83378],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),g=o,u=m["".concat(p,".").concat(g)]||m[g]||c[g]||r;return t?a.createElement(u,i(i({ref:n},s),{},{components:t})):a.createElement(u,i({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_position:6e3,slug:"2022-02-17",title:"Yolo App - Pipeline Predictions",authors:"mpolinowski",tags:["Tensorflow","Machine Learning","Python","YOLO"]},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline/index",id:"IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline/index",title:"Yolo App - Pipeline Predictions",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline",slug:"/IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline/2022-02-17",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline/2022-02-17",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline/index.md",tags:[{label:"Tensorflow",permalink:"/docs/tags/tensorflow"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"YOLO",permalink:"/docs/tags/yolo"}],version:"current",sidebarPosition:6e3,frontMatter:{sidebar_position:6e3,slug:"2022-02-17",title:"Yolo App - Pipeline Predictions",authors:"mpolinowski",tags:["Tensorflow","Machine Learning","Python","YOLO"]},sidebar:"tutorialSidebar",previous:{title:"Yolo App - Tesseract Optical Character Recognition",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-02-18--yolo-app-ocr/2022-02-18"},next:{title:"Yolo App - Train a Model with Tensorflow",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-02-16--yolo-app-tensorflow-model/2022-02-16"}},p={},d=[{value:"Model Predictions",id:"model-predictions",level:2},{value:"Loading the Model",id:"loading-the-model",level:3},{value:"Load a Test Image",id:"load-a-test-image",level:3},{value:"Predict Number Plate Coordinates",id:"predict-number-plate-coordinates",level:3},{value:"Detection Pipeline",id:"detection-pipeline",level:2}],s={toc:d};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shenzhen, China",src:t(94808).Z,width:"1500",height:"688"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-02-15--yolo-app-get-data/2022-02-15"},"Prepare your Images and get Data")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-02-16--yolo-app-tensorflow-model/2022-02-16"},"Train your Tensorflow Model")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline/2022-02-17"},"Use your Model to do Predictions")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-02-18--yolo-app-ocr/2022-02-18"},"Use Tesseract to Read Number Plates")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-02-19--yolo-app-flask/2022-02-19"},"Flask Web Application")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-02-20--yolo-app-yolov5-data-prep/2022-02-20"},"Yolo v5 - Data Prep"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#model-predictions"},"Model Predictions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#loading-the-model"},"Loading the Model")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#load-a-test-image"},"Load a Test Image")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#predict-number-plate-coordinates"},"Predict Number Plate Coordinates")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#detection-pipeline"},"Detection Pipeline"))),(0,o.kt)("h2",{id:"model-predictions"},"Model Predictions"),(0,o.kt)("h3",{id:"loading-the-model"},"Loading the Model"),(0,o.kt)("p",null,"I can now load the trained model and try to run a prediction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import numpy as np\nimport cv2\nimport matplotlib.pyplot as plt\nimport tensorflow as tf\nfrom tensorflow.keras.preprocessing.image import load_img, img_to_array\n\n# Load the trained model\nmodel = tf.keras.models.load_model('../models/object_detection.h5')\nprint('[INFO] object detection model loaded')\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/44232898/memoryerror-in-tensorflow-and-successful-numa-node-read-from-sysfs-had-negativ"},"Memory Error in Tensorflow"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:936] successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero"))),(0,o.kt)("p",null,"Running the following command from my console to set each device to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," got rid of the warning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"for a in /sys/bus/pci/devices/*; do echo 0 | sudo tee -a $a/numa_node; done\n")),(0,o.kt)("h3",{id:"load-a-test-image"},"Load a Test Image"),(0,o.kt)("p",null,"I now need to pick an image the model was not trained on to check to models accuracy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# Pick a test image that your model was not trained on\npath = './test_images/index5.jpg'\nimage = load_img(path) # PIL object\n\n# convert into array and get the normalized output\nimage = np.array(image,dtype=np.uint8) # 8 bit array (0,255)\nimage1 = load_img(path,target_size=(224,224))\nimage_arr_224 = img_to_array(image1)/255.0\n\n# Get size of the orginal image\nh,w,d = image.shape\nprint('Image height:',h)\nprint('Image width:',w)\n\n# Show selected image\nplt.figure(figsize=(10,8))\nplt.imshow(image)\nplt.show()\n")),(0,o.kt)("h3",{id:"predict-number-plate-coordinates"},"Predict Number Plate Coordinates"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# Check if dimensions are OK\nimage_arr_224.shape\n\n# Add index number colume to shape\ntest_arr = image_arr_224.reshape(1,224,224,3)\ntest_arr.shape\n\n# Use trained model to predict \n# number plate location\ncoords = model.predict(test_arr)\ncoords\n\n# Denormalize output\ndenorm = np.array([w,w,h,h])\ncoords = (coords * denorm).astype(np.int32)\ncoords\n\n# Daw bounding on top the image\nxmin, xmax,ymin,ymax = coords[0]\npt1 =(xmin,ymin)\npt2 =(xmax,ymax)\nprint(pt1, pt2)\ncv2.rectangle(image,pt1,pt2,(0,255,0),3)\n\nplt.figure(figsize=(10,8))\nplt.imshow(image)\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tensorflow Predictions",src:t(49732).Z,width:"1070",height:"661"})),(0,o.kt)("h2",{id:"detection-pipeline"},"Detection Pipeline"),(0,o.kt)("p",null,"I can now wrap everything into a single function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# Wrap all steps into a function\ndef object_detection(path):\n    # Read image\n    image = load_img(path) # PIL object\n    image = np.array(image,dtype=np.uint8) # 8 bit array (0,255)\n    image1 = load_img(path,target_size=(224,224))\n    # Data preprocessing\n    image_arr_224 = img_to_array(image1)/255.0  # convert into array and get the normalized output\n    h,w,d = image.shape\n    test_arr = image_arr_224.reshape(1,224,224,3)\n    # Make predictions\n    coords = model.predict(test_arr)\n    # Denormalize the values\n    denorm = np.array([w,w,h,h])\n    coords = coords * denorm\n    coords = coords.astype(np.int32)\n    # Draw bounding on top the image\n    xmin, xmax,ymin,ymax = coords[0]\n    pt1 =(xmin,ymin)\n    pt2 =(xmax,ymax)\n    print(pt1, pt2)\n    cv2.rectangle(image,pt1,pt2,(0,255,0),3)\n    return image, coords\n")),(0,o.kt)("p",null,"I can test the function on another image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# Select another test image\npath = './test_images/index3.jpg'\n# Use function to select number plate\nimage, cods = object_detection(path)\n\nplt.figure(figsize=(10,8))\nplt.imshow(image)\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tensorflow Predictions",src:t(87581).Z,width:"1073",height:"550"})))}c.isMDXComponent=!0},49732:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Yolo_App_TF_Predictions_01-f89d2a0225a615abdfe7b1d7049a6c18.png"},87581:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Yolo_App_TF_Predictions_02-c7f008d70b246f0aa472c9f4c5a81563.png"},94808:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ffe80356d19fb4b090a3bef79b45aab3.jpg"}}]);