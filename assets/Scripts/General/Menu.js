#pragma strict

public var Mostrar:boolean;
	public var level:String;
	public var windowRect:Rect;
	public var  desing:GUISkin;
	private var fondo:GameObject;
	private var ui:GameObject[];


	
	
	
	

function Start () {
	


		
	
	ui = GameObject.FindGameObjectsWithTag("Pause");
	fondo = GameObject.Find("fondoNivel1");



}



function Update () {

}

function OnTriggerEnter2D(col: Collider2D){

		
		
			Mostrar = true;
			settingUi(true);

			
		//	Debug.Log("Entro");
			

		
		
	}
	
	function OnMouseDown()
{
	Debug.Log("MouseDown");
	Time.timeScale = 0f;
	Mostrar = true;
	//

	
	
	
}
		

function func(){	

 		
	
		if (GUILayout.Button ("Continuar")) {


			Mostrar = false;
			Time.timeScale = 1f;
			settingUi(true);

			
				}
				
		if (GUILayout.Button ("Reiniciar")) {

			Mostrar = false;
			Time.timeScale = 1f;
			SceneManager.LoadScene("Level0"+level);
			settingUi(true);

			
		
			
		}
		if (GUILayout.Button ("Salir")) {

			Mostrar = false;
			Time.timeScale = 1f;
			SceneManager.LoadScene("menuInicial");
			settingUi(true);
			
		}
		
						
	}

function OnGUI(){

	
	
	if (Mostrar) {

			windowRect = new Rect (Screen.width / 2 - 160, Screen.height / 2 - 160, 300, 300);
			windowRect = GUI.Window(0,windowRect,func,"PAUSA \n");



		
		
	}
	}

function settingUi(bol)
{
	var bole:boolean;
	//Debug.Log("Bole"+ bole);
	bole = bol;

	Debug.Log(level);
	//gameObject.renderer.enabled = bole;
	
	if(level == 0)
	{
		gameObject.GetComponent.<GUITexture>().enabled = bole;
	}
	
		

	if(bole == false)
	{
		Time.timeScale = 0f;
		fondo.GetComponent(SpriteRenderer).color = Color.gray;
	}
	else
	{
		fondo.GetComponent(SpriteRenderer).color = Color.white;
		Time.timeScale = 1f;
	}


	}		
		
		
	
	
	


	