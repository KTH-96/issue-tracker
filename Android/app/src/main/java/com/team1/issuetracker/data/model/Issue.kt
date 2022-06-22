package com.team1.issuetracker.data.model

data class Issue(
    val issueId: Int = 0,
    val mileStone: String = "",
    val title: String = "",
    val content: String = "",
    val labelContent: String = "",
    val labelColor: String = "",
    var isSwiped: Boolean = false,
    var isCheckVisible: Boolean = false,
    var isChecked: Boolean = false
)
