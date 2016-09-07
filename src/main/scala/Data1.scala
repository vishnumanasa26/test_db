/**
  * Created by dell on 9/1/2016.
  */
//this file is used for testing view
import org.json4s._
import org.json4s.native.Serialization

trait Data1
//Metrics(NAME:String, DATE: Double, IP_ADD:Int, PORT:Int, LOAD:Int, MEMORY:Int)
case class Value(NAME:String, DATE:String, LOAD:Int, MEMORY:Int) extends Data1


object Data1  {
  var daa = List[Data1](
    Value("Graphite", "7", 6, 8),
    Value("second", "17", 16, 38),
    Value("Third", "2", 4, 3)
  )

  private implicit val formats = Serialization.formats(ShortTypeHints(List(classOf[Data1])))
}
