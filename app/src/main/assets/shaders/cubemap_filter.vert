#version 300 es


layout(location = 0) in vec4 a_Position;

out vec2 v_Position;

void main() {
  gl_Position = a_Position;
  v_Position = a_Position.xy;
}
