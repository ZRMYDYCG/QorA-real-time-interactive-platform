export const toggleAttentionStatus = (dynamics, dynamicId, user_for_id) => {
  // 找到触发的动态项
  const triggerDynamic = dynamics.find((item) => item.dynamic_id === dynamicId)

  if (triggerDynamic) {
    triggerDynamic.is_attention = !triggerDynamic.is_attention

    // 切换所有具有相同 user_for_id 的动态项的 is_attention 状态
    dynamics.forEach((dynamic) => {
      if (dynamic.dynamic_user === user_for_id) {
        dynamic.is_attention = triggerDynamic.is_attention
      }
    })
  }
  return dynamics
}
