import System.IO;

private var material1:Texture2D;
var story: AudioClip[];
var relato:AudioSource;
var icon:Texture2D;
var impact : AudioClip;
var conversaciones:String[];
var img:Sprite;
var archivo;
var cont: int;
public var  desing:GUISkin; //Skin general del juego

private var imagesRepeated: Hashtable = {"1":"1", "2":"2","3":"3","4":"4",
	"5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12",
	"13":"13","14":"14"};

function Start () 
{
	cont = serialization.savedGame.image+1;
	leerArchivo();

	var imageRty = verifyImage(cont);
	if(imageRty != null){
		img = Resources.Load(""+imageRty, Sprite);
	}
	else{
		img = Resources.Load(""+cont, Sprite);
	}

	var object  = GameObject.FindGameObjectWithTag("MainCamera");
	relato = object.GetComponent.<AudioSource>();
	print("Entro a"+(cont + 1));
	playAudio();
	this.GetComponent(SpriteRenderer).sprite = img;



}


function playAudio()
{

	
	relato.clip = story[cont];

	if(!(cont == 16 || cont == 17))
	{
		if(cont != 14){
			relato.Play();
			yield WaitForSeconds (story[cont].length + 1.3);
			print("hablo");
			continuar();
		}
		else{
			relato.Play();
			yield WaitForSeconds (story[cont].length + 0.2);
			print("hablo");
			continuar();
		}
			

	}


}

function continuar ()
{

	if(!conversaciones[cont-1].Equals("cargando")){
			cont = cont+1;
			playAudio();
			efectos();
			var posicionRendered:String;
			var imageRendered = verifyImage(cont);
			print(imageRendered);


			if(imageRendered != null){
				posicionRendered = imageRendered;
			}
			else{
				posicionRendered = ""+cont;
			}
			img = Resources.Load(posicionRendered, Sprite);
			this.GetComponent(SpriteRenderer).sprite = img;
		}		
}
function verifyImage(pos){
	if(imagesRepeated[""+pos] != null){
		return imagesRepeated[""+pos];
	}
}

function Update () {}

function OnGUI(){ 
	GUI.skin = desing;
//	if(GUI.Button(Rect(Screen.width - Screen.width/8,Screen.height - Screen.height/5,Screen.width/13,Screen.height/6),icon))
//	{
//		if(!conversaciones[cont-1].Equals("cargando")){
//			cont = cont+1;
//			playAudio();
//			efectos();
//			var posicionRendered:String;
//			var imageRendered = verifyImage(cont);
//			Debug.Log(cont);
//			print(imageRendered);
//			if(imageRendered != null){
//				posicionRendered = imageRendered;
//			}
//			else{
//				posicionRendered = ""+cont;
//			}
//			img = Resources.Load(posicionRendered, Sprite);
//			this.GetComponent(SpriteRenderer).sprite = img;
//		}		
//	}
	if(!conversaciones[cont-1].Equals("cargando"))
	{
		var centeredStyle = GUI.skin.GetStyle("Label");
	    centeredStyle.alignment = TextAnchor.UpperCenter;
		GUI.skin.label.fontSize=Screen.width/27;
		GUI.color=Color.white;
		GUI.Box(Rect (50,10,Screen.width - 100,(Screen.width/7.3)),"");
	    GUI.Label(Rect (50,10,Screen.width - 100,(Screen.width/7.3)),""+conversaciones[cont-1]);

	}

}

function efectos()
{
	if(cont==4)
	{
		GetComponent.<AudioSource>().PlayOneShot(impact,1);
	}
	else if(cont==16)
	{
		serialization.SaveData(0,cont,"Init");
		SceneManager.LoadScene("level0");
	}
	else if(cont==17)
	{
		serialization.SaveData(null,cont,"Menu");
		SceneManager.LoadScene("Animacion");
	}
	else if(cont==18)
	{
		serialization.SaveData(1,cont,"Init");
		SceneManager.LoadScene("level1");
	}

	else if(cont==31)
	{
		serialization.SaveData(2,cont,"Init");
		SceneManager.LoadScene("level2");
	}
	else if(cont==34)
	{
		serialization.SaveData(null,cont,"Menu");
		SceneManager.LoadScene("Menu");
	}
	else if(cont==42)
	{
		serialization.SaveData(3,cont,"Init");
		SceneManager.LoadScene("level3");
	}
	else if(cont==44)
	{
		SceneManager.LoadScene("creditos");
	}
}

function leerArchivo()
{
	var conversacionesFileText = Resources.Load("conversaciones") as TextAsset;
	conversaciones  = conversacionesFileText.text.Split("\n"[0]);

}