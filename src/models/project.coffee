restful = require "node-restful"
mongoose = restful.mongoose
ObjectId = mongoose.Schema.Types.ObjectId

ProjectSchema = restful.model("project", mongoose.Schema(
  title: {
    type: "string"
    match: /\S/
    required: true
  }
  description: "string"
  owner: {
    type: ObjectId
    ref: 'user'
  }
  progress: {
    type: "number"
    default: 0
    required: true
  }
  phase: {
    type: "number"
    default: 0
    required: true
  }
  bugs: ["string"]
  created_at: {
    type: "date"
    default: Date.now
  }
  collaborators: [
    {
      email: "string"
    }
  ]
  is_finished: "boolean"
  phases: {}
  themes: [{
    type: ObjectId
    ref: 'theme'
    }]
)).methods [
  "get"
  "post"
  "put"
  "delete"
  ]

module.exports = ProjectSchema