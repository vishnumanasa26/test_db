import com.datastax.driver.core.{Cluster, Session}
import spray.routing.HttpService

/**
  * Created by dell on 8/30/2016.
  */

import akka.actor.ActorSystem
import spray.routing.SimpleRoutingApp
import spray.routing.Route
import spray.http.MediaTypes
import spray.httpx.Json4sSupport
import org.json4s.Formats
import org.json4s.JsonAST.JObject
import org.json4s.DefaultFormats
import org.json4s.native.Serialization.{read, write, writePretty}

object Main extends App with SimpleRoutingApp with Configuration with Json4sSupport with HttpService {

  implicit var actorSystem = ActorSystem()

  // globally override the default format to respond with Json
  implicit def json4sFormats: Formats = DefaultFormats

    //var daa = Data1.daa


//  def main(args: Array[String]): Unit = {
    println("helloooo11")
    //val ma = Metrics("lol", 4,'5',6,7)
    //ConnectToCassandra.store(ma);
   // println("maaaa")



  startServer(interface = serviceHost, port = servicePort) {
    //testing
    get {
      path("hello1") {
        complete {
          "Hello"
        }
      }
    } ~
    //to obtain index page in spray-can server
    get {
      path("index") {
          getFromFile("C:\\Users\\dell\\Desktop\\test_db\\frontend\\index.html")
      }
    } ~
    //to obtain js file to spray-can server
      get {
        path("amchart-graph.js") {
          getFromFile("C:\\Users\\dell\\Desktop\\test_db\\frontend\\amchart-graph.js")
        }
      } ~
    //to obtain css file to spray-can server
      get {
        path("graph.css") {
          getFromFile("C:\\Users\\dell\\Desktop\\test_db\\frontend\\graph.css")
        }
      } ~
    //details of all the servers
   get {
        path("view") {
          complete {

                ConnectToCassandra.retrive()

          }

        }
      }~
    //view details of a particular server
      get {
        path("viewServer"/ Segment ) { name =>
          complete {
            ConnectToCassandra.retrive_user(name)
          }
          }

      }~
      get {
        path("date") {
          parameters("name") {
            { name =>
              complete {
                ConnectToCassandra.retrive_date(name)
              }
            }
          }
        }
      }~
    //delete details of a particular server
      delete {
        path("deleteServer"/ Segment ) { name =>
          ConnectToCassandra.delete_user(name)
          complete {
            "delete successful"
          }
        }
      }~
      post {//post is used to update the record...we can use put if we want to insert
      path("add") {
          entity(as[JObject]) { fragmentObj =>
            val x = fragmentObj.extract[Metrics]//Values is replaced by metrics
            //daa = x :: daa
            ConnectToCassandra.store(x)
            println("\nhiii")
            complete {
              "OK"
            }
        }
      }
    }
  }
}


