"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[38175],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:6080,slug:"2021-12-05",title:"OpenCV Face Detection and Privacy",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},o=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2021-12-05--opencv-face-detection/index",id:"IoT-and-Machine-Learning/ML/2021-12-05--opencv-face-detection/index",title:"OpenCV Face Detection and Privacy",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-12-05--opencv-face-detection/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-12-05--opencv-face-detection",slug:"/IoT-and-Machine-Learning/ML/2021-12-05--opencv-face-detection/2021-12-05",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-05--opencv-face-detection/2021-12-05",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-12-05--opencv-face-detection/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"OpenCV",permalink:"/docs/tags/open-cv"}],version:"current",sidebarPosition:6080,frontMatter:{sidebar_position:6080,slug:"2021-12-05",title:"OpenCV Face Detection and Privacy",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},sidebar:"tutorialSidebar",previous:{title:"OpenCV Object Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-06--opencv-object-tracking/2021-12-06"},next:{title:"OpenCV Image Objects",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-04--opencv-image-objects/2021-12-04"}},s={},p=[{value:"Prepare OpenCV",id:"prepare-opencv",level:2},{value:"OpenCV Face Detection",id:"opencv-face-detection",level:2},{value:"Structure",id:"structure",level:3},{value:"Privacy Masks",id:"privacy-masks",level:3},{value:"Gaussian Blur",id:"gaussian-blur",level:4},{value:"Pixelation",id:"pixelation",level:4},{value:"Applying Privacy Masks to Images",id:"applying-privacy-masks-to-images",level:3},{value:"Command Line Arguments",id:"command-line-arguments",level:4},{value:"Detect Faces",id:"detect-faces",level:4},{value:"Handling RTSP Livestreams",id:"handling-rtsp-livestreams",level:3}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Shenzhen, China",src:a(67316).Z,width:"2385",height:"919"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prepare-opencv"},"Prepare OpenCV")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#opencv-face-detection"},"OpenCV Face Detection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#structure"},"Structure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#privacy-masks"},"Privacy Masks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#gaussian-blur"},"Gaussian Blur")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pixelation"},"Pixelation")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#applying-privacy-masks-to-images"},"Applying Privacy Masks to Images"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#command-line-arguments"},"Command Line Arguments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#detect-faces"},"Detect Faces")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#handling-rtsp-livestreams"},"Handling RTSP Livestreams"))))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/opencv-face-detection"},"Github Repo")),(0,i.kt)("h2",{id:"prepare-opencv"},"Prepare OpenCV"),(0,i.kt)("p",null,"Create and activate a virtual work environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv .env\nsource .env/bin/activate\npython -m pip install --upgrade pip\n")),(0,i.kt)("p",null,"Add a file ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies.txt")," with all project ",(0,i.kt)("strong",{parentName:"p"},"pip dependencies"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"opencv-python\nnumpy\nimutils\n")),(0,i.kt)("p",null,"Install all dependencies with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r dependencies.txt\n")),(0,i.kt)("h2",{id:"opencv-face-detection"},"OpenCV Face Detection"),(0,i.kt)("p",null,"Based on ",(0,i.kt)("a",{parentName:"p",href:"https://www.pyimagesearch.com/2020/04/06/blur-and-anonymize-faces-with-opencv-and-python/"},"Blur and anonymize faces with OpenCV and Python")," by Adrian Rosebrock. Detect faces in images and either add a gaussian blur or pixelate them."),(0,i.kt)("h3",{id:"structure"},"Structure"),(0,i.kt)("p",null,"This project uses the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spmallick/learnopencv/blob/master/FaceDetectionComparison/models/res10_300x300_ssd_iter_140000_fp16.caffemodel"},"res10_300x300_ssd_iter_140000_fp16.caffemodel")," from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spmallick/learnopencv/"},"@spmallick | Learn OpenCV"),". Download the model and ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/spmallick/learnopencv/master/FaceDetectionComparison/models/deploy.prototxt"},"deploy.prototxt")," file from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spmallick/learnopencv/tree/master/FaceDetectionComparison/models"},"Github"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 blur_face.py\n\u251c\u2500\u2500 blur_face_video.py\n\u251c\u2500\u2500 dependencies.txt\n\u251c\u2500\u2500 face_detector\n\u2502\xa0\xa0 \u251c\u2500\u2500 deploy.prototxt\n\u2502\xa0\xa0 \u2514\u2500\u2500 res10_300x300_ssd_iter_140000_fp16.caffemodel\n\u251c\u2500\u2500 processed\n\u2502\xa0\xa0 \u2514\u2500\u2500 face_blur.jpg\n\u251c\u2500\u2500 pyimagesearch\n\u2502\xa0\xa0 \u251c\u2500\u2500 face_blurring.py\n\u2514\u2500\u2500 resources\n    \u2514\u2500\u2500 metro.jpg\n")),(0,i.kt)("h3",{id:"privacy-masks"},"Privacy Masks"),(0,i.kt)("p",null,"The scripts ",(0,i.kt)("inlineCode",{parentName:"p"},"blur_face.py")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"blur_face_video.py")," help us to detect faces and then perform face blurring in images and video streams. The ",(0,i.kt)("inlineCode",{parentName:"p"},"pyimagesearch/face_blurring.py")," script provides two helper functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"anonymize_face_simple"),": Applies a simple Gaussian blur on the face ROI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"anonymize_face_pixelate"),": Creates a pixelated overlay on the ROI")),(0,i.kt)("h4",{id:"gaussian-blur"},"Gaussian Blur"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"anonymize_face_simple")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport cv2\n\ndef anonymize_face_simple(image, factor=3.0):\n    # automatically determine the size of the blurring kernel based\n    # on the spatial dimensions of the input image\n    (h, w) = image.shape[:2]\n    kW = int(w / factor)\n    kH = int(h / factor)\n    # ensure the width of the kernel is odd\n    if kW % 2 == 0:\n        kW -= 1\n    # ensure the height of the kernel is odd\n    if kH % 2 == 0:\n        kH -= 1\n    # apply a Gaussian blur to the input image using our computed\n    # kernel size\n    return cv2.GaussianBlur(image, (kW, kH), 0)\n")),(0,i.kt)("p",null,"The helper function calculates the blurring kernel\u2019s width and height as a function of the input image dimensions. Gaussian Kernel Size: ",(0,i.kt)("inlineCode",{parentName:"p"},"[height width]")," - height and width should be odd. The number represents the number of neighboring pixels a central pixel is averaged with. If the pixel is white and surrounded by red pixels, it will take on a reddish tint after being averaged with them - the image looses it contours and will start to look blurry:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Larger kernel size -> pixels are averaged with more of their surrounding -> resulting in more blur"),(0,i.kt)("li",{parentName:"ul"},"Smaller kernel size -> pixels are averaged with less of their surrounding -> resulting in less blur")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Increasing the factor")," will therefore ",(0,i.kt)("strong",{parentName:"p"},"increase the amount of blur")," applied to the face."),(0,i.kt)("p",null,"The helper function increases the amount of blur applied the bigger the ROI becomes - making sure that the face remain unrecognizable even when working with huge image files."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OpenCV Face Detection and Privacy",src:a(52908).Z,width:"1428",height:"548"})),(0,i.kt)("h4",{id:"pixelation"},"Pixelation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"anonymize_face_pixelate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def anonymize_face_pixelate(image, blocks=3):\n    # divide the input image into NxN blocks\n    (h, w) = image.shape[:2]\n    xSteps = np.linspace(0, w, blocks + 1, dtype="int")\n    ySteps = np.linspace(0, h, blocks + 1, dtype="int")\n    # loop over the blocks in both the x and y direction\n    for i in range(1, len(ySteps)):\n        for j in range(1, len(xSteps)):\n            # compute the starting and ending (x, y)-coordinates\n            # for the current block\n            startX = xSteps[j - 1]\n            startY = ySteps[i - 1]\n            endX = xSteps[j]\n            endY = ySteps[i]\n            # extract the ROI using NumPy array slicing, compute the\n            # mean of the ROI, and then draw a rectangle with the\n            # mean RGB values over the ROI in the original image\n            roi = image[startY:endY, startX:endX]\n            (B, G, R) = [int(x) for x in cv2.mean(roi)[:3]]\n            cv2.rectangle(image, (startX, startY), (endX, endY),\n                (B, G, R), -1)\n    # return the pixelated blurred image\n    return image\n')),(0,i.kt)("p",null,"The helper script takes the input image and divides it into blocks and computes the mean RGB pixel intensities for the ROI."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OpenCV Face Detection and Privacy",src:a(27145).Z,width:"1419",height:"539"})),(0,i.kt)("h3",{id:"applying-privacy-masks-to-images"},"Applying Privacy Masks to Images"),(0,i.kt)("h4",{id:"command-line-arguments"},"Command Line Arguments"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"blur_face.py")),(0,i.kt)("p",null,"I want to be able to use command line flags to control the application - instead of hard-coding values in. To parse these flags I need to import the library ",(0,i.kt)("inlineCode",{parentName:"p"},"argparse")," and define the parameter I want to use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Parse the arguments\nap = argparse.ArgumentParser()\nap.add_argument("-i", "--image", required=True, help="path to image")\nap.add_argument("-f", "--face", required=True, help="path to detector model")\nap.add_argument("-m", "--method", type=str, default="simple", choices=["simple", "pixelated"], help="face blurring method")\nap.add_argument("-b", "--blocks", type=int, default=12, help="number of pixel blocks for pixelate")\nap.add_argument("-c", "--confidence", type=float, default=0.5, help="minimum probability of positive detection")\nargs = vars(ap.parse_args())\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--image"),": Relative path to the image I want to mask."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--face"),": Relative Path to your face detector model directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--method"),": Use gaussian blur or pixelate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--blocks"),": Number of blocks used to pixelate. Smaller numbers make the ROI less recognizable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--confidence"),": Lower confidence will catch more faces but might result in false positives.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python blur_face.py --image resources/metro.jpg --face face_detector --method simple")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python blur_face.py --image resources/metro.jpg --face face_detector --method pixelated"))),(0,i.kt)("h4",{id:"detect-faces"},"Detect Faces"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Load serialized face detector from disk\nprint("[INFO] loading face detector model")\nprototxtPath = os.path.sep.join([args["face"], "deploy.prototxt"])\nweightsPath = os.path.sep.join([args["face"], "res10_300x300_ssd_iter_140000_fp16.caffemodel"])\nnet = cv2.dnn.readNet(prototxtPath, weightsPath)\n\n# Copy resource image and get dimensions\nsource_image = cv2.imread(args["image"])\nimage = source_image.copy()\n(h, w) = image.shape[:2]\n\n# Get blob from image\nblob = cv2.dnn.blobFromImage(source_image, 1.0, (300, 300), (104.0, 177.0, 123.0))\n\n# Get face detections from blob\nprint("[INFO] computing face detections")\nnet.setInput(blob)\ndetections = net.forward()\n')),(0,i.kt)("p",null,"The neural network expects expects a blob from our input image:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"blob = cv2.dnn.blobFromImage(image, scalefactor=1.0, size, mean, swapRB=True)"))),(0,i.kt)("p",null,"A blob is just a image with the same spatial dimensions (i.e., width and height), same depth (number of channels), that have all be preprocessed in the same manner."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"image")," : This is the input image we want to preprocess before passing it through our deep neural network for classification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scalefactor")," : After we perform mean subtraction we can optionally scale our images by some factor. This value defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0")," (i.e., no scaling)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," : Here we supply the spatial size that the ",(0,i.kt)("strong",{parentName:"li"},"Convolutional Neural Network")," expects. You usually get this value from the name of the model you are importing - above it is ",(0,i.kt)("inlineCode",{parentName:"li"},"300x300"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mean")," : These are our mean subtraction values. They can be a 3-tuple of the RGB means or they can be a single value in which case the supplied value is subtracted from every channel of the image. If you\u2019re performing mean subtraction, ensure you supply the 3-tuple in ",(0,i.kt)("inlineCode",{parentName:"li"},"(R, G, B)")," order, especially when utilizing the default behavior of swapRB=True ."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swapRB")," : OpenCV assumes images are in BGR channel order; however, the ",(0,i.kt)("inlineCode",{parentName:"li"},"mean")," value assumes we are using RGB order. To resolve this discrepancy we can swap the R and B channels in image by setting this value to ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),". By default OpenCV performs this channel swapping for us.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Loop over detections\nfor i in range(0, detections.shape[2]):\n    # extract confidence from detections\n    confidence = detections[0, 0, i, 2]\n    # filter by min confidence\n    if confidence > args["confidence"]:\n        # compute bounding box for\n        # passing detections\n        box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])\n        (startX, startY, endX, endY) = box.astype("int")\n        # extract face ROI\n        face = source_image[startY:endY, startX:endX]\n        # select blur method\n        if args["method"] == "simple":\n            face = anonymize_face_simple(face, factor=3.0)\n        else:\n            face = anonymize_face_pixelate(face, blocks=args["blocks"])\n\n        # store blurred face in output image\n        source_image[startY:endY, startX:endX] = face\n')),(0,i.kt)("p",null,"This part loops over all detected ROI's and - if they pass the confidence level - apply either the gaussian blur or pixelate them."),(0,i.kt)("h3",{id:"handling-rtsp-livestreams"},"Handling RTSP Livestreams"),(0,i.kt)("p",null,"To use RTSP streams instead of a static image I will need another CLI argument for the live stream URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Parse the arguments\nap = argparse.ArgumentParser()\nap.add_argument("-u", "--url", help="RTSP streaming URL", default="rtsp://admin:instar@192.168.2.19/livestream/13")\nap.add_argument("-f", "--face", required=True, help="path to detector model")\nap.add_argument("-m", "--method", type=str, default="simple", choices=["simple", "pixelated"], help="face blurring "\n                                                                                                    "method")\nap.add_argument("-b", "--blocks", type=int, default=20, help="number of pixel blocks for pixelate")\nap.add_argument("-c", "--confidence", type=float, default=0.5, help="minimum probability of positive detection")\nargs = vars(ap.parse_args())\n')),(0,i.kt)("p",null,"Load the detection model as before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# load our serialized face detector model from disk\nprint("[INFO] loading face detector model...")\nprototxtPath = os.path.sep.join([args["face"], "deploy.prototxt"])\nweightsPath = os.path.sep.join([args["face"],\n                                "res10_300x300_ssd_iter_140000_fp16.caffemodel"])\nnet = cv2.dnn.readNet(prototxtPath, weightsPath)\n')),(0,i.kt)("p",null,"And then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"imutils")," library to grab the video stream:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Get video stream from IP camera\nprint("[INFO] starting video stream")\nvs = VideoStream(args["url"]).start()\n')),(0,i.kt)("p",null,"The detection part is pretty much the same. With one exception that I now need to read single frames out of the stream and loop the detection over it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Loop over the frames from the video stream\nwhile True:\n    # grab the frame from the threaded video stream and resize it\n    # to have a maximum width of 1080 pixels\n    frame = vs.read()\n    frame = imutils.resize(frame, width=1080)\n    # grab the dimensions of the frame and then construct a blob\n    # from it\n    (h, w) = frame.shape[:2]\n    blob = cv2.dnn.blobFromImage(frame, 1.0, (300, 300), (104.0, 177.0, 123.0))\n    # pass the blob through the network and obtain the face detections\n    net.setInput(blob)\n    detections = net.forward()\n    # loop over the detections\n    for i in range(0, detections.shape[2]):\n        # extract the confidence (i.e., probability) associated with\n        # the detection\n        confidence = detections[0, 0, i, 2]\n        # filter out weak detections by ensuring the confidence is\n        # greater than the minimum confidence\n        if confidence > args["confidence"]:\n            # compute the (x, y)-coordinates of the bounding box for\n            # the object\n            box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])\n            (startX, startY, endX, endY) = box.astype("int")\n            # extract the face ROI\n            face = frame[startY:endY, startX:endX]\n            # check to see if we are applying the "simple" face\n            # blurring method\n            if args["method"] == "simple":\n                face = anonymize_face_simple(face, factor=3.0)\n            # otherwise, we must be applying the "pixelated" face\n            # anonymization method\n            else:\n                face = anonymize_face_pixelate(face,\n                                               blocks=args["blocks"])\n            # store the blurred face in the output image\n            frame[startY:endY, startX:endX] = face\n\n        # show the output frame\n        cv2.imshow("Frame", frame)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"USAGE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python blur_face_video.py --url 'rtsp://admin:instar@192.168.2.19/livestream/12' --face face_detector --method simple")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python blur_face_video.py --url 'rtsp://admin:instar@192.168.2.19/livestream/11' --face face_detector --method pixelated"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OpenCV Face Detection and Privacy",src:a(57211).Z,width:"537",height:"340"})))}m.isMDXComponent=!0},52908:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OpenCV_Face_Detection_01-6b45e78c2fdc12c2dd7ef4cdbdd78308.png"},27145:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OpenCV_Face_Detection_02-4ff6f8a1d0aa0bf1e6f65a9ffbe25a10.png"},67316:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5a0b68587d9242bbb46a1f1aaab44216.jpg"},57211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/realtime_pixelation-13f81b7a0081f7eff2ad4ec7d0edc669.gif"}}]);