part of marvel_cinema;

class VideoState extends State<Video> {
  late VideoPlayerController? vcontroller;
  late bool controlVisible;
  Timer? timer;

  @override
  void initState() {
    controlVisible = true;

    if (widget.videoUrl.startsWith('http')) {
      vcontroller = VideoPlayerController.networkUrl(Uri.parse(widget.videoUrl));
    } else {
      vcontroller = VideoPlayerController.asset(
          widget.videoUrl.isNotEmpty ? widget.videoUrl : 'assets/video/app_intro.mp4');
    }

    vcontroller!.initialize().then((_) {
      if (!mounted) return;
      setState(() {});
      vcontroller!.play();
      autoHide();
    });

    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.dark.copyWith(
      statusBarColor: Colors.transparent,
    ));
    super.initState();
  }

  @override
  void dispose() {
    vcontroller?.dispose();
    timer?.cancel();
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitDown,
      DeviceOrientation.portraitUp,
    ]);
    super.dispose();
  }

  void handlerGesture() {
    setState(() {
      controlVisible = !controlVisible;
    });
    autoHide();
  }

  void autoHide() {
    if (controlVisible) {
      timer = Timer(
          Duration(seconds: 5), () => setState(() => controlVisible = false));
    } else {
      timer?.cancel();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        fit: StackFit.expand,
        children: <Widget>[
          if (vcontroller != null && vcontroller!.value.isInitialized)
            Center(
              child: AspectRatio(
                aspectRatio: vcontroller!.value.aspectRatio,
                child: VideoPlayer(vcontroller!),
              ),
            )
          else
            Center(child: CircularProgressIndicator()),
          GestureDetector(
            behavior: HitTestBehavior.translucent,
            onTap: handlerGesture,
            child: vcontroller != null 
              ? PlayerControl(
                  vcontroller!,
                  visible: controlVisible,
                  title: widget.title,
                )
              : Container(),
          ),
          Positioned(
            top: 40.0,
            left: 20.0,
            child: IconButton(
              icon: const Icon(Icons.arrow_back, color: Colors.white, size: 30.0),
              onPressed: () => Navigator.pop(context),
            ),
          ),
        ],
      ),
    );
  }
}
