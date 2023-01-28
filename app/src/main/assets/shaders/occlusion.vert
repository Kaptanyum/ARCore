#version 300 es


layout(location = 0) in vec4 a_Position;
layout(location = 1) in vec2 a_CameraTexCoord;
layout(location = 2) in vec2 a_VirtualSceneTexCoord;

#if USE_OCCLUSION
out vec2 v_CameraTexCoord;
#endif
out vec2 v_VirtualSceneTexCoord;

void main() {
  gl_Position = a_Position;
#if USE_OCCLUSION
  v_CameraTexCoord = a_CameraTexCoord;
#endif
  v_VirtualSceneTexCoord = a_VirtualSceneTexCoord;
}
