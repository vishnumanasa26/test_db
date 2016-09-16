

name := "test_db"

version := "1.0"

scalaVersion := "2.11.8"

//sbtPlugin := true

//jarName in assembly := "spray-cassandra.jar"


//mainClass := Some("Main")

scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8")

libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-actor" % "2.3.6",
  "com.typesafe.akka" %% "akka-http-experimental" % "0.7",
  "com.datastax.cassandra" % "cassandra-driver-core" % "3.0.0",
  "io.spray" %% "spray-routing" % "1.3.2",
  "io.spray" %% "spray-client" % "1.3.2",
  "io.spray" %% "spray-testkit" % "1.3.2" % "test",
  "org.json4s" %% "json4s-native" % "3.2.10",
  "io.spray" %% "spray-json" % "1.3.2",
  "io.spray" %%  "spray-can" % "1.3.2"

)