import { Component, Input } from '@angular/core'
import { VideoPlaylist } from '@app/shared/video-playlist/video-playlist.model'

@Component({
  selector: 'my-video-playlist-miniature',
  styleUrls: [ './video-playlist-miniature.component.scss' ],
  templateUrl: './video-playlist-miniature.component.html'
})
export class VideoPlaylistMiniatureComponent {
  @Input() playlist: VideoPlaylist
}