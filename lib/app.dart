// Dart Imports
import 'dart:async';
import 'dart:convert';

// Flutter imports
import 'package:http/http.dart' show Client;
import 'package:rxdart/rxdart.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

// Plugins import...
import 'package:fluro/fluro.dart';
import 'package:video_player/video_player.dart';
import 'package:youtube_player_iframe/youtube_player_iframe.dart';

// Internal Imports
import 'src/helpers/config/constants.dart';
import 'src/helpers/config/application.dart';
import 'src/helpers/config/routes.dart';
import 'src/helpers/config/route_handlers.dart';
import 'src/models/episode.dart';
import 'src/models/result.dart';
import 'src/models/item_model.dart';
import 'src/blocs/movies_bloc.dart';
import 'src/resources/movie_api_provider.dart';
import 'src/resources/repository.dart';
import 'src/utils/theme/color.dart';
import 'src/utils/theme/typography.dart';
import 'src/utils/local_store.dart';
import 'src/pages/video/index.dart';
import 'src/pages/video/state.dart';
import 'src/pages/home/index.dart';
import 'src/pages/home/state.dart';
import 'src/pages/summary/index.dart';
import 'src/pages/summary/state.dart';
import 'src/pages/filter/index.dart';
import 'src/pages/filter/state.dart';
import 'src/pages/detail/index.dart';
import 'src/pages/detail/state.dart';
import 'src/pages/profile/index.dart';
import 'src/pages/profile/state.dart';
import 'src/widgets/tvshow-list/index.dart';
import 'src/widgets/media_image.dart';
import 'src/widgets/player-life-cycle/index.dart';
import 'src/widgets/player-life-cycle/state.dart';
import 'src/widgets/player-controls/index.dart';
import 'src/widgets/player-controls/state.dart';

class MarvelCinema extends StatelessWidget {
  MarvelCinema({Key? key}) : super(key: key) {
    final router = FluroRouter();
    Routes.configureRoutes(router);
    Application.router = router;
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Hero Universe',
      theme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: Colors.black,
        scaffoldBackgroundColor: Colors.black,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      onGenerateRoute: Application.router.generator,
      home: Home(title: 'Home'),
    );
  }
}
