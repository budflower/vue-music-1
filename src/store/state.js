import {playMode} from 'common/js/config'
const state = {
  singer: {},
  playing: false, // 控制播放器暂停/开始
  fullScreen: false, // 控制播放器是否全屏展示
  playList: [], // 播放器歌曲列表，用于上一曲和下一曲，控制播放模式
  sequenceList: [],
  mode: playMode.sequence, // 播放模式
  currentIndex: -1
}
export default state
