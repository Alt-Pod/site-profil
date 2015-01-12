

function submitSearch(form,list){
    $('#'+form).submit(function(){
        $("#"+list).html("<div class='load'></div>")
        $.get($(this).attr('action'),$(this).serialize(),function(data){
            $('#'+list).html(data);
            observeRowListEvent();
        })
        return false;
    })
}

function observeRowListEvent(){
    $('.content table tr').mouseover(function(){
        $(this).addClass('over');
    }).mouseout(function(){
        $(this).removeClass('over');
    });
    $('.content table tr').click(function(){
        $('.content table tr.active').removeClass('active')
        $(this).addClass('active');
    })
}

function pagination(id,form){
    $('#'+id+' .pagination a').click(function(){
        $('#'+id+' .pagination').html("<span class='load'>Chargement en cours ...</span>")
        if(form!=undefined){
            $.get(this.href,$("#"+form).serialize(),function(data){
                $('#'+id).html(data)
            });
        }else{
            $.get(this.href,{},function(data){
                $('#'+id).html(data)
            });
        }
        return false;
    });
}

function validateRequiredField(id){
    if(id!=undefined){
        data= $('#'+id+' span.required')
    }else{
        data= $('span.required')
    }
    data.each(function(i,rq){
        $(rq).parent().next().find('select,input,textarea').each(function(j,field){
            new LiveValidation(field.id,{} ).add( Validate.Presence,{
                failureMessage:''
            });
        })
    })
}

function handleResponse(options,data){
    actionInProgess(false);
    switch(options['type']){
        case 'script':
            eval(data)
            break;
        case 'json':
            if(data.success != undefined){
                if(data.msg!= undefined){
                    alert(data.msg);
                }
                if(data.refresh || data.search==true){
                    $('#'+(data.search_formId!=undefined ? data.search_formId : 'form_search')).submit()
                }
                if(data.popup != undefined){
                    closePopup(data.popup);
                }
                if(options['update'] != undefined){
                    $("#"+options['update']).html(data.html);
                }
                if(data.callback != undefined){
                    eval(data.callback);
                }
            }else{
                if(data.error != undefined){
                    alert(data.error)
                }
                if(data.callback){
                    eval(data.callback);
                }
                if(data.script){
                    eval(data.script);
                }
            }
            break;
        case 'html':
            $('#'+options['update']).htmt(data)
            break;
    }
}

function submitForm(form,options){
    options=options||[];
    options['type']=options['type']||'json';
    actionInProgess(true);
    //if($(".form input:file").length>0){
    if($(form).find("input:file").length>0){
        $(form).ajaxSubmit({
            dataType: options['type'],
            success: function(data) {
                handleResponse(options,data);
            }
        },options['type']);
    }else{
        $.post($(form).attr('action'),$(form).serialize(),function(data){
            handleResponse(options,data)
        },options['type']);
    }
}

function observeCategory(id,path){
    observeClassification(id+'_category',id+'_subcategory',path)
}

function observeRegion(id,path,city_id){
    city_id=city_id||(id+'_city')
    observeClassification(id+'_region',city_id,path+"/cities")
}

function observeClassification(id,child,url){
    $('#'+id).change(function(){
        if($(this).val()==''){
            $('#'+child).html("<option value=''></option>")
        } else{
            $.get(url,{
                id:$(this).val(),
                blank:true
            },function(data){
                $('#'+child).html(data)
            })
        }
    })
}



function buildPopup(url,width,height,id){
    if(url!=''){
        var popup=createPopup(id||'page',{
            width:width,
            height:height,
            loaderTitle: 'Patientez : Chargement de la page encours ...'
        })

        $.get(url,{},function(data){
            $(popup).html(data)
        })
    }
}

function actionInProgess(state){
    if(state){
        $('.form .act').append("<div class='inprogress'><span>In progress</span></div>")
    }else{
        $('.form .act .inprogress').remove()
    }
}


// Ajax

$(document).ready(function()
{
    //-------------------------------------------------------
    /*shows the loading div every time we have an Ajax call*/
    $("#loading").bind("ajaxSend", function(){
        $(this).show();
    }).bind("ajaxComplete", function(){
        $(this).hide();
    });
//-------------------------------------------------------
})

;
