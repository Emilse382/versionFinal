#pragma strict
public static var salud:int = 50 ;
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

	fondo = GameObject.Find("fondoNivel2");

	 
}
function func(){
	if (GUILayout.Button ("Reiniciar")) {

			Mostrar = false;
			Time.timeScale = 1f;
			SceneManager.LoadScene("Level1");




			
		
			
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
			SceneManager.LoadScene("Level2");


			
		
			
		}

		
		}

function OnGUI()
	{
		
		 
	   GameObject.Find("Text").GetComponent.<UnityEngine.UI.Text>().text = "Salud: "+salud;
//	   GameObject.Find("Diarrea").GetComponent.<UnityEngine.UI.Text>().text = "Diarrea: "+diarrea;
	   if (Mostrar) {

			windowRect = new Rect (Screen.width / 2 - 160, Screen.height / 2 - 160, 300, 300);
			windowRect = GUI.Window(0,windowRect,func,"PERDISTE \n");



	}

	if (Mostrarse) {

			
	        windowRect1 = new Rect (Screen.width / 2 - 160, Screen.height / 2 - 160, 300, 300);
			windowRect1 = GUI.Window(0,windowRect1,funcio,"GANASTE \n");
	
	}


	}

function OnTriggerEnter2D(col:Collider2D){
		if(col.tag == "hamburguesa"||col.tag == "perro"||col.tag == "manzana"||col.tag == "zanahoria")
		{
			

					Destroy(col.gameObject);



			}

				
					




			if(col.tag=="hamburguesa"|| col.tag=="perro"){
					salud-=5;

				}

					if(col.tag=="manzana"|| col.tag=="zanahoria"){
					salud+=5;
}

		}

function Update () {

if(salud==0){

if(Pausa == false){
Pausa = true;
Time.timeScale = 0f;



}
Mostrar=true;	
salud= 100;



}
		

if(salud==80){

		
	
Mostrarse = true;




}
			
			}
		

