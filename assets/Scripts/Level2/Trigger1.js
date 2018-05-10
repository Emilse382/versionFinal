#pragma strict
public static var hidratacion:int = 50 ;
public static var diarrea:int = 50 ;
public var Mostrar : boolean;
public var Mostrarse : boolean;
public var Pausa: boolean;
public var level:String;
public var windowRect:Rect;
public var windowRect1:Rect;
public var  desing:GUISkin;
private var fondo:GameObject;
//public var level:String;


function Start () {

	fondo = GameObject.Find("fondojuego");

	 
}
function func(){
	if (GUILayout.Button ("Reiniciar")) {

			Mostrar = false;
			Time.timeScale = 1f;
			//int SceneId= SceneManager.GetActiveScene ();
			//Destroy(gameObject);
			SceneManager.LoadScene("Level2");

			//Application.LoadLevel("Application.loadlevel");


			
		
			
		}
		if (GUILayout.Button ("Salir")) {

			Mostrar = false;
			Time.timeScale = 1f;
			SceneManager.LoadScene("menuInicial");

			
		}
		
		}

function funcio(){
	if (GUILayout.Button ("Continuar")) {

			Mostrarse = false;
			Time.timeScale = 1f;
			SceneManager.LoadScene("Informacion");


			
		
			
		}

		
		}

function OnGUI()
	{
		
		 
	   GameObject.Find("Hidratacion").GetComponent.<UnityEngine.UI.Text>().text = "Hidratacion: "+hidratacion;
	   GameObject.Find("Diarrea").GetComponent.<UnityEngine.UI.Text>().text = "Diarrea: "+diarrea;
	   if (Mostrar) {

			windowRect = new Rect (Screen.width / 2 - 160, Screen.height / 2 - 160, 300, 300);
			windowRect = GUI.Window(0,windowRect,func,"PERDISTE \n");

			//Mostrar = true;
		    //Time.timeScale = 0f;

	}

	if (Mostrarse) {

			
	        windowRect1 = new Rect (Screen.width / 2 - 160, Screen.height / 2 - 160, 300, 300);
			windowRect1 = GUI.Window(0,windowRect1,funcio,"GANASTE \n");
	//		Mostrarse = true;
		//	Time.timeScale = 0f;
	}


	}

function OnTriggerEnter2D(col:Collider2D){
		if(col.tag == "agua"||col.tag == "suero"||col.tag == "gaseosa"||col.tag == "bebida")
		{
			

					Destroy(col.gameObject);



			}

				
					//CameraGameOver.SetActive (true);
					//MainCamera.SetActive (false);




					if(col.tag=="agua"){
					hidratacion-=5;
					diarrea+=5;
					}

					if(col.tag=="suero"){
					hidratacion+=5;
					diarrea-=5;
					}

					if(col.tag=="gaseosa"){
					hidratacion-=5;
					diarrea+=5;
					}
					if(col.tag=="bebida"){
					hidratacion-=5;
					diarrea+=5;
					}

		}

function Update () {

if(hidratacion==0 && diarrea==100){
//Mostrar = true; 
if(Pausa == false){
Pausa = true;
Time.timeScale = 0f;



}
Mostrar=true;	
hidratacion= 50;
diarrea=50;
//Time.timeScale = 0f;
//hidratacion=50;
//diarrea=50;


}
		

if(hidratacion==100 && diarrea==0){

		

Mostrarse = true;
Time.timeScale = 0f;



}
			
			}
		

