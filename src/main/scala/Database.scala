/**
  * Created by dell on 8/30/2016.
  */

import com.datastax.driver.core.{Cluster, Session}
import scala.collection.JavaConversions
import org.json4s.ShortTypeHints
import org.json4s.native.Serialization


  case class Metrics(NAME:String, DATE: String, LOAD:Int, MEMORY_TOTAL:Int, MEMORY:Int) extends ConnectToCassandra
   trait ConnectToCassandra
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

    def store(metric: Metrics) = {

      try{
        //println("\n In try of nik")
        val keyspace = "softhouse"
        val (cluster, session) = setup(keyspace, "localhost", 9042)
        println("\nafter setup.........")
        val name1 = metric.NAME.toString
        val date1 = metric.DATE.toString
        //val ipAddress1 = metric.IP_ADD.toString
        val cpuLoad1 = metric.LOAD.toInt
        val cpuMemory1 = metric.MEMORY.toInt
        //val id1 = metric.ID.toInt
        //val name1 = metric.NAME.toString


        val cql = "INSERT INTO metrics (uname, date_time, cpu_load, memory, total_memory) VALUES ('"+metric.NAME+"', '"+date1+"',  "+cpuLoad1+", "+cpuMemory1+", "+metric.MEMORY_TOTAL+")"
        val resultSet = session.execute( cql )
      }


      finally {
        close()
        println("Done!")
      }

    }
// retrives the whole data in the database
    def retrive(): List[Metrics] =
    {  var values = List[Metrics]()
      try {
        val keyspace = "softhouse"
        val (cluster, session) = setup(keyspace, "localhost", 9042)

        val cql = "SELECT * FROM metrics"
        val resultSet = session.execute( cql )
        val itr = JavaConversions.asScalaIterator(resultSet.iterator)
        itr.foreach( row => {
          val name = row.getString("uname")
          val date = row.getString("date_time")
          val cpuLoad = row.getInt("cpu_load")
          val memory = row.getInt("memory")
          val memory_total = row.getInt("total_memory")
          var xy = Metrics(name, date, cpuLoad, memory_total, memory)
          values = xy :: values
          //println(s"$name $date")

        })


      }
      finally {
        ConnectToCassandra.close()
        println("Done!")
      }
      return values
    }

//retrives details of a particular server
    def retrive_user( server_name: String): List[Metrics] =
    {  var values = List[Metrics]()
      try {
        val keyspace = "softhouse"
        val (cluster, session) = setup(keyspace, "localhost", 9042)

        val cql = "SELECT * FROM metrics where uname = '"+server_name+"'"
        val resultSet = session.execute( cql )
        val itr = JavaConversions.asScalaIterator(resultSet.iterator)
        itr.foreach( row => {
          val name = row.getString("uname")
          val date = row.getString("date_time")
          val cpuLoad = row.getInt("cpu_load")
          val memory = row.getInt("memory")
          val memory_total = row.getInt("total_memory")
          var xy = Metrics(name, date, cpuLoad, memory_total, memory)
          values = xy :: values
          //println(s"$name $date")

        })


      }
      finally {
        ConnectToCassandra.close()
        println("Done!")
      }
      return values
    }

//to delete details of a particular user
    def delete_user(userName: String) = {

      try{
        //println("\n In try of nik")
        val keyspace = "softhouse"
        val (cluster, session) = setup(keyspace, "localhost", 9042)
        //val name1 = metric.NAME.toString
        //val date1 = metric.DATE.toString
        //val ipAddress1 = metric.IP_ADD.toString
        //val cpuLoad1 = metric.LOAD.toInt
        //val cpuMemory1 = metric.MEMORY.toInt
        //val id1 = metric.ID.toInt
        //val name1 = metric.NAME.toString
        val cql = "delete * from metrics where uname = '"+userName+"'"
        val resultSet = session.execute( cql )
      }


      finally {
        close()
        println("Done!")
      }

    }











    //retrives details of a servers of a particular date
    def retrive_date( date: String): List[Metrics] =
    {  var values = List[Metrics]()
      try {
        val keyspace = "softhouse"
        val (cluster, session) = setup(keyspace, "localhost", 9042)

        val cql = "SELECT * FROM metrics where uname = '"+date+"'"
        val resultSet = session.execute( cql )
        val itr = JavaConversions.asScalaIterator(resultSet.iterator)
        itr.foreach( row => {
          val name = row.getString("uname")
          val date = row.getString("date_time")
          val cpuLoad = row.getInt("cpu_load")
          val memory = row.getInt("memory")
          val memory_total = row.getInt("total_memory")
          var xy = Metrics(name, date, cpuLoad, memory_total, memory)
          values = xy :: values
          //println(s"$name $date")

        })


      }
      finally {
        ConnectToCassandra.close()
        println("Done!")
      }
      return values
    }

     //to convert to json objects
     private implicit val formats = Serialization.formats(ShortTypeHints(List(classOf[ConnectToCassandra])))


  }





