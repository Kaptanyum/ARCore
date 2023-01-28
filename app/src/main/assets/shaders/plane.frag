#version 300 es


precision highp float;
uniform sampler2D u_Texture;
uniform vec4 u_GridControl;  // dotThreshold, lineThreshold, lineFadeShrink,
                             // occlusionShrink

in vec3 v_TexCoordAlpha;
layout(location = 0) out vec4 o_FragColor;

void main() {
  vec4 control = texture(u_Texture, v_TexCoordAlpha.xy);
  float dotScale = v_TexCoordAlpha.z;
  float lineFade =
      max(0.0, u_GridControl.z * v_TexCoordAlpha.z - (u_GridControl.z - 1.0));
  float alpha = (control.r * dotScale > u_GridControl.x) ? 1.0
                : (control.g > u_GridControl.y)          ? lineFade
                                                         : (0.1 * lineFade);
  o_FragColor = vec4(alpha * v_TexCoordAlpha.z);
}
