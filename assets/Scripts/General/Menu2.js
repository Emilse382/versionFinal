#pragma strict

public var Mostrar:boolean;

	public var windowRect:Rect;
	public var  desing:GUISkin;
	private var fondo:GameObject;


	
	
	
	

function Start () {
	


		
	

	fondo = GameObject.Find("fondoNivel2");



}



function Update () {

}

function OnTriggerEnter2D(col: Collider2D){

		
		
			Mostrar = true;


			
		
			

		
		
	}
	
	function OnMouseDown()
{
	Debug.Log("MouseDown");
	Time.timeScale = 0f;
	Mostrar = true;

	
	
	
}
		

function func(){	

 		
	
		if (GUILayout.Button ("Continuar")) {


			Mostrar = false;
			Time.timeScale = 1f;


			
				}
				
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

function OnGUI(){

	
	
	if (Mostrar) {

			windowRect = new Rect (Screen.width / 2 - 160, Screen.height / 2 - 160, 300, 300);
			windowRect = GUI.Window(0,windowRect,func,"PAUSA \n");



		
		
	}
	}


		
		
	
	
	


	