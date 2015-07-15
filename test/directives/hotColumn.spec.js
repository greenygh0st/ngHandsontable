
describe('hotColumn', function() {
  var rootScope, compile;

  beforeEach(module('ngHandsontable'));

  beforeEach(inject(function(_$compile_, _$rootScope_, $q) {
    rootScope = _$rootScope_;
    compile = _$compile_;
    q = $q;
  }));

  afterEach(function() {
    angular.element(document.querySelector('hot-table')).remove();
  });

  it('should create Handsontable with 3 columns', function() {
    var scope = angular.element(compile(
        '<hot-table>' +
          '<hot-column></hot-column>' +
          '<hot-column></hot-column>' +
          '<hot-column></hot-column>' +
        '</hot-table>'
      )(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().columns.length).toBe(3);
  });

  it('should create table with `width` attribute in columns', function() {
    rootScope.columns = [void 0, 100, 120];
    var scope = angular.element(compile(
        '<hot-table>' +
          '<hot-column width="{{ columns[0] }}"></hot-column>' +
          '<hot-column width="{{ columns[1] }}"></hot-column>' +
          '<hot-column width="{{ columns[2] }}"></hot-column>' +
        '</hot-table>'
      )(rootScope)).isolateScope();

    scope.$digest();
    var columns = scope.hotInstance.getSettings().columns;

    expect(columns[0].width).toBe(void 0);
    expect(columns[1].width).toBe(100);
    expect(columns[2].width).toBe(120);
  });

  it('should create table with `title` attribute in columns', function() {
    rootScope.columns = [void 0, 'foo', 'bar'];
    var scope = angular.element(compile(
        '<hot-table>' +
          '<hot-column title="\'{{ columns[0] }}\'"></hot-column>' +
          '<hot-column title="\'{{ columns[1] }}\'"></hot-column>' +
          '<hot-column title="\'{{ columns[2] }}\'"></hot-column>' +
        '</hot-table>'
      )(rootScope)).isolateScope();

    scope.$digest();

    var columns = scope.hotInstance.getSettings().columns;

    expect(columns[0].title).toBe('');
    expect(columns[1].title).toBe('foo');
    expect(columns[2].title).toBe('bar');
  });

  it('should create table with `data` attribute in columns', function() {
    rootScope.data = [{id: 4, name: 'John', gender: 'male'}];
    var scope = angular.element(compile(
        '<hot-table>' +
          '<hot-column data="id"></hot-column>' +
          '<hot-column data="name"></hot-column>' +
          '<hot-column data="gender"></hot-column>' +
        '</hot-table>'
      )(rootScope)).isolateScope();

    scope.$digest();
    var columns = scope.hotInstance.getSettings().columns;

    expect(columns[0].data).toBe('id');
    expect(columns[1].data).toBe('name');
    expect(columns[2].data).toBe('gender');
  });

  it('should create table with `data` attribute in columns', function() {
    rootScope.types = ['text', 'numeric', 'date'];
    var scope = angular.element(compile(
        '<hot-table>' +
          '<hot-column type="\'{{ types[0] }}\'"></hot-column>' +
          '<hot-column type="\'{{ types[1] }}\'"></hot-column>' +
          '<hot-column type="\'{{ types[2] }}\'"></hot-column>' +
        '</hot-table>'
      )(rootScope)).isolateScope();

    scope.$digest();
    var columns = scope.hotInstance.getSettings().columns;

    expect(columns[0].type).toBe('text');
    expect(columns[1].type).toBe('numeric');
    expect(columns[2].type).toBe('date');
  });

  it('should create table with `readOnly` attribute in columns', function() {
    rootScope.readOnly = true;
    var scope = angular.element(compile(
        '<hot-table>' +
          '<hot-column></hot-column>' +
          '<hot-column readOnly></hot-column>' +
          '<hot-column readOnly="readOnly"></hot-column>' +
        '</hot-table>'
      )(rootScope)).isolateScope();

    scope.$digest();
    var columns = scope.hotInstance.getSettings().columns;

    expect(columns[0].readOnly).toBe(void 0);
    expect(columns[1].readOnly).toBe(true);
    expect(columns[2].readOnly).toBe(true);
  });

  it('should create table with `format` attribute in columns', function() {
    rootScope.formats = [void 0, '$0', '0.0USD'];
    var scope = angular.element(compile(
        '<hot-table>' +
          '<hot-column format="\'{{ formats[0] }}\'"></hot-column>' +
          '<hot-column format="\'{{ formats[1] }}\'"></hot-column>' +
          '<hot-column format="\'{{ formats[2] }}\'"></hot-column>' +
        '</hot-table>'
      )(rootScope)).isolateScope();

    scope.$digest();
    var columns = scope.hotInstance.getSettings().columns;

    expect(columns[0].format).toBe('');
    expect(columns[1].format).toBe('$0');
    expect(columns[2].format).toBe('0.0USD');
  });

  it('should create table with `checkedTemplate` attribute in columns', function() {
    rootScope.checkedTemplate = [true, 'Yes', 'Go'];
    var scope = angular.element(compile(
        '<hot-table>' +
          '<hot-column checked-template="\'{{ checkedTemplate[0] }}\'"></hot-column>' +
          '<hot-column checked-template="\'{{ checkedTemplate[1] }}\'"></hot-column>' +
          '<hot-column checked-template="\'{{ checkedTemplate[2] }}\'"></hot-column>' +
        '</hot-table>'
      )(rootScope)).isolateScope();

    scope.$digest();
    var columns = scope.hotInstance.getSettings().columns;

    expect(columns[0].checkedTemplate).toBe('true');
    expect(columns[1].checkedTemplate).toBe('Yes');
    expect(columns[2].checkedTemplate).toBe('Go');
  });

  it('should create table with `uncheckedTemplate` attribute in columns', function() {
    rootScope.uncheckedTemplate = [false, 'No', 'Stop'];
    var scope = angular.element(compile(
        '<hot-table>' +
          '<hot-column unchecked-template="\'{{ uncheckedTemplate[0] }}\'"></hot-column>' +
          '<hot-column unchecked-template="\'{{ uncheckedTemplate[1] }}\'"></hot-column>' +
          '<hot-column unchecked-template="\'{{ uncheckedTemplate[2] }}\'"></hot-column>' +
        '</hot-table>'
      )(rootScope)).isolateScope();

    scope.$digest();
    var columns = scope.hotInstance.getSettings().columns;

    expect(columns[0].uncheckedTemplate).toBe('false');
    expect(columns[1].uncheckedTemplate).toBe('No');
    expect(columns[2].uncheckedTemplate).toBe('Stop');
  });
});
