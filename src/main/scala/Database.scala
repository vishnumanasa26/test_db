/**
  * Created by dell on 8/30/2016.
  */

//import com.datastax.spark.connector._
//import com.datastax.spark.connector.cql._
import com.datastax.driver.core.{Cluster, Session}

import scala.collection.JavaConversions
  //import org.json4s.ShortTypeHints
  //import org.json4s.native.Serialization


  case class Metrics(NAME:String, DATE: Double, IP_ADD:Int, LOAD:Int, MEMORY:Int) extends ConnectToCassandra

  object ConnectToCassandra {

    var cluster: Cluster = null
    var session: Session = null

    println("\nentered database connect")

    def setup(keyspaceName: String, host: String, port: Int): (Cluster, Session) = {
      cluster = Cluster.builder().addContactPoint(host).withPort(port).build()
      session = cluster.connect(keyspaceName)
      (cluster, session)


    }

    def close() = {
      if (session != null) {
        session.close()
        session = null
      }

      if (cluster != null) {
        cluster.close()
        cluster = null
      }
    }

    println("\ncompleated set up")

    def nik(metric: Metrics) = {

      try{
        println("\n In try of nik")
        val keyspace = "softhouse"
        val (cluster, session) = setup(keyspace, "localhost", 9042)
        println("\nafter setup.........")
        //val id1 = metric.ID.toInt
        //val name1 = metric.NAME.toString

        val cql = "INSERT INTO metrics (uname, date_time, ip_address, cpu_load, memory) VALUES ('doneee', '2', '3', 9, 5)"
        val resultSet = session.execute( cql )
      }


      finally {
        close()
        println("Done!")
      }
   // return metric
    }


    //private implicit val formats = Serialization.formats(ShortTypeHints(List(classOf[ConnectToCassandra])))
    //def toJSONM(metric:List[Metrics])=Serialipackage com.roblayton.example


  }

  trait ConnectToCassandra



