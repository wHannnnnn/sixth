function prev(obj) {
    var prevEle = obj.previousElementSibling || obj.previousSibling;

    if(prevEle&&prevEle.nodeType==1){
        return prevEle;
    }else {
        return null;
    }
}

function next(obj) {
    var nextEle = obj.nextElementSibling || obj.nextSibling;

    if(nextEle&&nextEle.nodeType==1){
        return nextEle;
    }else {
        return null;
    }
}
function last(obj) {
    var lastEle = obj.lastElementChild || obj.lastChild;

    if(lastEle&&lastEle.nodeType==1){
        return lastEle;
    }else {
        return null;
    }
}
function first(obj) {
    //    ���� obj ֮��
    //     ��׼������� ����ʶ���һ������ ��ȡ���ǵ�һ��Ԫ�ؽڵ�����
    //     �Ǳ�׼    ����ʶ���һ������ Ϊ�� Ȼ���ߺ���  ����ʶ��ڶ�������  ����ֻ����Ԫ�ؽڵ�
    //  ���һ���ӽڵ㶼û��  ��׼�ͷǱ�׼���������ȡ����Ԫ�ؽڵ�  ��  firstEle������ ����ô����null
    //  �������ֻ��һ���ı��ڵ� ��ô �ı��ڵ�Ҳ�Ǵ��ڵ� �����  ����Ҫ�ټ�һ������ ����ס�ı�
    var firstEle = obj.firstElementChild || obj.firstChild;

    if(firstEle&&firstEle.nodeType==1){
        return firstEle;
    }else {
        return null;
    }

}/**
 * Created by wanghan on 2017/9/18.
 */
