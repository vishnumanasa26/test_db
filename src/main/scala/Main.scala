import com.datastax.driver.core.{Cluster, Session}

/*
import scala.collection.JavaConversions

/**
  * Created by dell on 8/30/2016.
  */


object ConnectToCassandra {
  var cluster:Cluster = null
  var session:Session = null

  def setup(keyspaceName:String, host:String, port:Int) :(Cluster,Session) = {
    cluster = Cluster.builder().addContactPoint(host).withPort(port).build()
    session = cluster.connect(keyspaceName)
    (cluster,session)
  }

  def close() = {
    if( session != null ) session.close()
    if( cluster != null ) cluster.close()
  }

  def demo() = {
    try {
      val keyspace = "hello"
      val (cluster, session) = ConnectToCassandra.setup(keyspace, "localhost", 9042)

      val cql = "SELECT * FROM manasa"
      val resultSet = session.execute( cql )
      val itr = JavaConversions.asScalaIterator(resultSet.iterator)
      itr.foreach( row => {
        val firstName = row.getString("Id")
        val lastName = row.getString("name")
        println(s"$firstName $lastName")
      })

    }
    finally {
      ConnectToCassandra.close()
      println("Done!")
    }
  }

  def main(args: Array[String]) {
    ConnectToCassandra.demo()
  }

}

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

object Main extends App with SimpleRoutingApp with Configuration with Json4sSupport {

  implicit var actorSystem = ActorSystem()

  // globally override the default format to respond with Json
  implicit def json4sFormats: Formats = DefaultFormats

  var daa = Data1.daa


//  def main(args: Array[String]): Unit = {
    println("helloooo11")
    val ma = Metrics("lol", 4,5,6,7)
    ConnectToCassandra.nik(ma);
    println("maaaa")



  startServer(interface = serviceHost, port = servicePort) {
    get {
      path("hello1") {
        complete {
          "Hello World!"
        }
      }
    } ~
      get {
        path("view") {
          complete {
            daa
          }
        }
      }~
      post {//post is used to update the record...we can use put if we want to insert
      path("add") {
          entity(as[JObject]) { fragmentObj =>
            val x = fragmentObj.extract[Value]
            daa = x :: daa
            println("\nhiii")
            complete {
              "OK"
            }
        }
      }
    }

  }
}


